import "server-only";

/**
 * Client beehiiv — server-only. La clé API ne doit JAMAIS atteindre le client :
 * l'import "server-only" fait échouer le build si ce module est importé côté
 * client par erreur.
 */

export type BeehiivResult =
  | { ok: true } // inscrit, ou déjà abonné (traité comme un succès)
  | { ok: false; reason: "config" | "network" | "api" };

type BeehiivRequest = {
  email: string;
  referringSite: string;
};

export async function subscribeToBeehiiv({
  email,
  referringSite,
}: BeehiivRequest): Promise<BeehiivResult> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    // Mauvaise configuration serveur : on log côté serveur, on ne fuit rien au client.
    console.error(
      "[beehiiv] Variables d'environnement manquantes (BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID).",
    );
    return { ok: false, reason: "config" };
  }

  const endpoint = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        send_welcome_email: true,
        // Opt-in simple : l'abonné est actif immédiatement, pas d'email de
        // confirmation à cliquer.
        double_opt_override: "off",
        utm_source: "landing",
        utm_medium: "site",
        referring_site: referringSite,
      }),
      // On ne veut aucun cache sur un appel d'écriture.
      cache: "no-store",
    });
  } catch (err) {
    console.error("[beehiiv] Erreur réseau:", err);
    return { ok: false, reason: "network" };
  }

  if (res.ok) {
    return { ok: true };
  }

  // Un abonné déjà existant ne doit pas être une erreur pour l'utilisateur.
  // beehiiv renvoie généralement un 4xx avec un message explicite dans ce cas.
  let bodyText = "";
  try {
    bodyText = await res.text();
  } catch {
    // ignoré
  }

  if (isAlreadySubscribed(res.status, bodyText)) {
    return { ok: true };
  }

  console.error(
    `[beehiiv] Réponse inattendue (${res.status}): ${bodyText.slice(0, 500)}`,
  );
  return { ok: false, reason: "api" };
}

function isAlreadySubscribed(status: number, body: string): boolean {
  const normalized = body.toLowerCase();
  return (
    status === 409 ||
    normalized.includes("already") ||
    normalized.includes("exist") ||
    normalized.includes("duplicate")
  );
}
