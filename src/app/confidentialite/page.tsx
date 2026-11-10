import type { Metadata } from "next";
import PageTexte from "@/components/PageTexte";
import V from "@/components/ARemplir";
import { INFOS } from "@/lib/infos";

export const metadata: Metadata = { title: "Politique de confidentialité — Fantômes" };

export default function Page() {
  return (
    <PageTexte titre="Politique de confidentialité">
      <p>
        <strong>En bref : ton relevé bancaire ne quitte jamais ton appareil.</strong> Il est lu et analysé dans ton
        navigateur ; il n’est ni envoyé ni stocké sur nos serveurs.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        <V v={INFOS.nomEditeur} />, <V v={INFOS.adresse} />, <V v={INFOS.email} />.
      </p>

      <h2>Ce que nous conservons, et pourquoi</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Ton email</strong> : pour t’envoyer ton accès et te permettre de te reconnecter (exécution du
          contrat).
        </li>
        <li>
          <strong>La liste des abonnements détectés</strong> (nom, montant, fréquence, statut), si tu as payé : pour
          afficher ton audit et ton total économisé. Aucune autre ligne de ton relevé.
        </li>
        <li>
          <strong>Les informations de paiement</strong> (montant, date, formule) : traitées par Stripe. Les factures
          sont conservées 10 ans (obligation comptable).
        </li>
        <li>
          <strong>Une mesure d’audience anonyme</strong>, sans cookie et sans suivi d’une visite à l’autre (intérêt
          légitime).
        </li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Ton compte et ta liste d’abonnements sont supprimés 12 mois après la fin de ton accès, ou immédiatement sur
        simple demande.
      </p>

      <h2>Sous-traitants</h2>
      <p>
        Vercel (hébergement), Supabase (base de données, serveurs dans l’Union européenne), Stripe (paiement), Resend
        (envoi des emails), Umami (mesure d’audience). Certains sont établis aux États-Unis ; ces transferts sont
        encadrés par les clauses contractuelles types de la Commission européenne.
      </p>

      <h2>Tes droits</h2>
      <p>
        Tu peux accéder à tes données, les corriger, les supprimer, t’opposer à leur traitement ou les récupérer en
        écrivant à <V v={INFOS.email} />. Réponse sous un mois. Tu peux aussi saisir la CNIL (cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>Aucun cookie publicitaire. Seul un cookie technique de connexion est déposé quand tu accèdes à ton espace.</p>
    </PageTexte>
  );
}
