"use server";

import { headers } from "next/headers";
import { isValidEmail, normalizeEmail } from "@/lib/validation";
import { rateLimit, pruneRateLimit } from "@/lib/rate-limit";
import { subscribeToBeehiiv } from "@/lib/beehiiv";
import { site } from "@/lib/site";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

const SUCCESS_MESSAGE =
  "C'est bon, tu es inscrit. Rendez-vous jeudi pour la prochaine édition — pense à vérifier tes spams si tu ne vois rien arriver.";

const GENERIC_ERROR =
  "Impossible de t'inscrire pour l'instant. Réessaie dans quelques instants.";

const INVALID_EMAIL = "Cette adresse email ne semble pas valide.";

const RATE_LIMITED =
  "Trop de tentatives. Patiente une minute avant de réessayer.";

export async function subscribeAction(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  // 1. Honeypot : un champ masqué qu'un humain ne remplit jamais.
  //    S'il est rempli, on renvoie un faux succès pour ne pas informer le bot.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  // 2. Limitation de débit par IP.
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  pruneRateLimit();
  const limit = rateLimit(ip);
  if (!limit.ok) {
    return { status: "error", message: RATE_LIMITED };
  }

  // 3. Validation serveur (miroir de la validation client).
  const raw = formData.get("email");
  if (!isValidEmail(raw)) {
    return { status: "error", message: INVALID_EMAIL };
  }
  const email = normalizeEmail(raw);

  // 4. URL de la page qui référe (pour beehiiv).
  const proto = headerList.get("x-forwarded-proto") ?? "https";
  const host = headerList.get("host");
  const referringSite = host ? `${proto}://${host}` : site.url;

  // 5. Appel beehiiv. Abonné existant = succès (géré dans le client beehiiv).
  const result = await subscribeToBeehiiv({ email, referringSite });

  if (result.ok) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  // On n'expose jamais la réponse brute de l'API : message générique et utile.
  return { status: "error", message: GENERIC_ERROR };
}
