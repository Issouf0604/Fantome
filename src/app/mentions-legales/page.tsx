import type { Metadata } from "next";
import PageTexte from "@/components/PageTexte";
import V from "@/components/ARemplir";
import { INFOS } from "@/lib/infos";

export const metadata: Metadata = { title: "Mentions légales — Fantômes" };

export default function Page() {
  return (
    <PageTexte titre="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        <V v={INFOS.nomEditeur} />
        <br />
        <V v={INFOS.statut} />
        <br />
        SIRET : <V v={INFOS.siret} />
        <br />
        Adresse : <V v={INFOS.adresse} />
        <br />
        Contact : <V v={INFOS.email} />
        <br />
        {INFOS.tva}
      </p>
      <p>
        Directeur de la publication : <V v={INFOS.nomEditeur} />.
      </p>
      <h2>Hébergement</h2>
      <p>{INFOS.hebergeur}</p>
      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, le logo et la mise en page du site appartiennent à l’éditeur. Les lettres de résiliation générées
        sont librement utilisables par le client pour ses propres démarches.
      </p>
      <h2>Responsabilité</h2>
      <p>
        Fantômes est un outil d’aide : il repère des prélèvements qui ressemblent à des abonnements et propose des
        lettres types. Il ne résilie rien à ta place et ne constitue pas un conseil juridique ou financier. Vérifie
        toujours les conditions de ton contrat avant d’envoyer une résiliation.
      </p>
    </PageTexte>
  );
}
