"use client";

import { useActionState, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  subscribeAction,
  initialSubscribeState,
} from "@/app/actions/subscribe";
import { isValidEmail } from "@/lib/validation";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="shrink-0 rounded-md bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-strong focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Inscription…" : "S'abonner"}
    </button>
  );
}

/**
 * Formulaire d'inscription réutilisé en haut et en bas de page.
 * États idle / loading / success / error gérés inline via useActionState.
 * `formId` garantit des identifiants uniques quand deux formulaires coexistent.
 */
export function SubscribeForm({ formId }: { formId: string }) {
  const [state, formAction] = useActionState(
    subscribeAction,
    initialSubscribeState,
  );
  const [clientError, setClientError] = useState<string | null>(null);
  const reactId = useId();
  const emailId = `email-${formId}-${reactId}`;
  const statusId = `status-${formId}-${reactId}`;
  const formRef = useRef<HTMLFormElement>(null);

  const isSuccess = state.status === "success";
  const serverError = state.status === "error" ? state.message : null;
  const errorMessage = clientError ?? serverError;

  if (isSuccess) {
    return (
      <div
        id={statusId}
        role="status"
        aria-live="polite"
        className="rounded-md border border-accent/30 bg-accent/5 px-4 py-4 text-sm text-ink"
      >
        <p className="font-medium">Bienvenue.</p>
        <p className="mt-1 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      onSubmit={(e) => {
        // Validation client : on bloque l'envoi si l'email est manifestement invalide.
        const data = new FormData(e.currentTarget);
        if (!isValidEmail(data.get("email"))) {
          e.preventDefault();
          setClientError("Cette adresse email ne semble pas valide.");
        } else {
          setClientError(null);
        }
      }}
      className="flex flex-col gap-3"
    >
      <label htmlFor={emailId} className="sr-only">
        Adresse email
      </label>

      {/* Honeypot anti-bot : masqué visuellement et aux lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`company-${formId}`}>Ne pas remplir</label>
        <input
          id={`company-${formId}`}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={emailId}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="ton@email.com"
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={errorMessage ? statusId : undefined}
          onChange={() => {
            if (clientError) setClientError(null);
          }}
          className="w-full flex-1 rounded-md border border-border bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus-visible:border-accent focus-visible:outline-none"
        />
        <SubmitButton />
      </div>

      {errorMessage && (
        <p
          id={statusId}
          role="alert"
          aria-live="assertive"
          className="text-sm text-accent-strong"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
