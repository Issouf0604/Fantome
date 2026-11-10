const lignes = [
  { date: "02/10", libelle: "PRLV SEPA STREAMFLIX", montant: "13,49", fantome: true },
  { date: "03/10", libelle: "CB CARREFOUR MARKET", montant: "42,17", fantome: false },
  { date: "05/10", libelle: "PRLV CLOUD PHOTOS+", montant: "2,99", fantome: true },
  { date: "07/10", libelle: "CB BOULANGERIE", montant: "4,60", fantome: false },
  { date: "11/10", libelle: "PRLV APPLI SPORT PREMIUM", montant: "9,99", fantome: true },
];

export default function Accueil() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-5 pb-10 pt-8">
      <p className="font-titre text-lg font-extrabold tracking-tight">Fantômes</p>

      <h1 className="font-titre mt-8 text-[2.5rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
        Débusque les abonnements que tu paies <span className="feutre">sans t’en servir.</span>
      </h1>

      <p className="mt-5 text-lg text-gris">
        Trois oublis à 9,99 €, c’est <strong className="font-semibold text-brique">360 € par an</strong> qui
        partent sans bruit. On les retrouve sur ton relevé en 2 minutes.
      </p>

      {/* Relevé annoté */}
      <div className="chiffres mt-8 rounded-sm border border-encre/15 bg-white/60 p-4 text-[13px] shadow-[3px_3px_0_0_rgb(27_26_23/0.08)]">
        {lignes.map((l) => (
          <div key={l.libelle} className={`flex gap-3 py-1.5 ${l.fantome ? "text-brique" : "text-gris/70"}`}>
            <span>{l.date}</span>
            <span className={`flex-1 truncate ${l.fantome ? "feutre" : ""}`}>{l.libelle}</span>
            <span>-{l.montant}</span>
          </div>
        ))}
        <div className="mt-2 border-t border-dashed border-encre/25 pt-2 text-encre">
          3 fantômes · <span className="font-medium text-brique">317,64 € par an</span>
        </div>
      </div>

      <ul className="mt-8 space-y-4 text-[17px]">
        <li><strong>Ton relevé ne quitte pas ton téléphone.</strong> L’analyse se fait sur ton appareil.</li>
        <li><strong>Classés par ce qu’ils te coûtent à l’année</strong>, pas au mois — là où ça pique vraiment.</li>
        <li><strong>Une lettre de résiliation prête</strong> pour chacun. Tu n’as plus qu’à l’envoyer.</li>
      </ul>

      <div className="sticky bottom-0 -mx-5 mt-auto bg-papier/95 px-5 pb-5 pt-6 backdrop-blur-sm">
        <a
          href="#"
          className="block w-full rounded-md bg-sapin py-4 text-center text-lg font-semibold text-papier active:translate-y-px"
        >
          Commencer — c’est gratuit
        </a>
        <p className="mt-2 text-center text-sm text-gris">3 questions, puis ton relevé. Sans inscription.</p>
      </div>
    </main>
  );
}
