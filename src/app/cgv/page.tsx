import type { Metadata } from "next";
import PageTexte from "@/components/PageTexte";
import V from "@/components/ARemplir";
import { INFOS, GARANTIE_JOURS } from "@/lib/infos";

export const metadata: Metadata = { title: "Conditions générales de vente — Fantômes" };

export default function Page() {
  return (
    <PageTexte titre="Conditions générales de vente">
      <p>
        En vigueur au 10 novembre 2026. Vendeur : <V v={INFOS.nomEditeur} />, SIRET <V v={INFOS.siret} />,{" "}
        <V v={INFOS.adresse} />, joignable à <V v={INFOS.email} />.
      </p>

      <h2>1. Ce qui est vendu</h2>
      <p>
        Fantômes analyse un relevé bancaire déposé par le client pour repérer les prélèvements récurrents, les classe
        par coût annuel, génère une lettre de résiliation pour chacun et tient le total des économies réalisées.
        L’analyse du relevé est faite sur l’appareil du client.
      </p>

      <h2>2. Formules et prix</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Audit</strong> : 19 € TTC, paiement unique, accès à l’audit complet pendant 30 jours.
        </li>
        <li>
          <strong>Audit + suivi 12 mois</strong> : 29 € TTC, paiement unique, analyses illimitées pendant 12 mois.
          Aucun renouvellement automatique.
        </li>
        <li>
          <strong>Mensuel</strong> : 9 € TTC par mois, sans engagement, résiliable à tout moment depuis le lien reçu
          par email. L’accès reste ouvert jusqu’à la fin du mois payé.
        </li>
      </ul>
      <p>
        {INFOS.tva}. Le paiement est traité par Stripe : l’éditeur n’a jamais accès aux numéros de carte.
      </p>

      <h2>3. Livraison</h2>
      <p>
        L’accès est ouvert immédiatement après la confirmation du paiement, et un lien de connexion est envoyé à
        l’adresse email indiquée lors du paiement.
      </p>

      <h2>4. Droit de rétractation</h2>
      <p>
        Le service étant un contenu numérique fourni immédiatement, le client demande expressément son exécution dès le
        paiement et reconnaît perdre son droit légal de rétractation de 14 jours (article L221-28, 13° du Code de la
        consommation). Cette renonciation ne retire rien à la garantie ci-dessous, plus favorable.
      </p>

      <h2>5. Garantie satisfait ou remboursé</h2>
      <p>
        Pendant <strong>{GARANTIE_JOURS} jours</strong> après l’achat, le client peut demander un remboursement
        intégral, <strong>sans avoir à se justifier</strong>, en écrivant à <V v={INFOS.email} /> et en indiquant
        l’adresse email utilisée pour l’achat. Le remboursement est lancé sous 2 jours ouvrés, sur le moyen de paiement
        d’origine ; il apparaît généralement sur le compte sous 5 à 10 jours selon la banque. L’accès est alors fermé.
      </p>

      <h2>6. Responsabilité</h2>
      <p>
        La détection est automatique et peut comporter des erreurs ou des oublis. Le client reste seul juge des
        contrats qu’il décide de résilier. L’éditeur ne résilie aucun contrat à sa place.
      </p>

      <h2>7. Réclamations et médiation</h2>
      <p>
        Toute réclamation peut être adressée à <V v={INFOS.email} />. En cas de litige non résolu, le client peut
        recourir gratuitement au médiateur de la consommation : <V v={INFOS.mediateur} />. Droit applicable : droit
        français.
      </p>
    </PageTexte>
  );
}
