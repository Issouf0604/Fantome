"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QUESTIONS, estimer, euros, phrases, PRIX_TYPE, type Reponses } from "@/lib/diagnostic";
import { mesurer } from "@/lib/mesure";

const CLES = ["nombre", "essai", "releve"] as const;

export default function Diagnostic() {
  const [etape, setEtape] = useState(0);
  const [rep, setRep] = useState<Partial<Reponses>>({});

  useEffect(() => mesurer("diagnostic-debut"), []);

  function choisir(i: number) {
    const suivant = { ...rep, [CLES[etape]]: i };
    setRep(suivant);
    if (etape === 2) {
      try { sessionStorage.setItem("fantomes-diagnostic", JSON.stringify(suivant)); } catch {}
      mesurer("diagnostic-fini");
    }
    setEtape(etape + 1);
    window.scrollTo(0, 0);
  }

  if (etape === 3) return <Resultat r={rep as Reponses} />;

  const q = QUESTIONS[etape];
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-5 pb-6 pt-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => (etape === 0 ? history.back() : setEtape(etape - 1))}
          className="-ml-2 p-2 text-gris"
          aria-label="Question précédente"
        >
          ←
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-papier-fonce" role="progressbar" aria-valuenow={etape + 1} aria-valuemin={1} aria-valuemax={3}>
          <div className="h-full rounded-full bg-sapin transition-all duration-300" style={{ width: `${((etape + 1) / 3) * 100}%` }} />
        </div>
        <span className="chiffres text-sm text-gris">{etape + 1}/3</span>
      </div>

      <h1 key={etape} className="font-titre mt-10 text-[1.9rem] font-extrabold leading-[1.1] tracking-tight">
        {q.titre}
      </h1>
      <p className="mt-3 text-gris">{q.aide}</p>

      <div className="mt-auto space-y-3 pt-10">
        {q.options.map((o, i) => (
          <button
            key={o}
            onClick={() => choisir(i)}
            className="block w-full rounded-md border-2 border-encre/15 bg-white/70 px-5 py-4 text-left text-lg font-medium active:border-sapin active:bg-sapin/5"
          >
            {o}
          </button>
        ))}
      </div>
    </main>
  );
}

function Resultat({ r }: { r: Reponses }) {
  const e = estimer(r);
  useEffect(() => mesurer("resultat-vu", { parAn: e.parAn }), [e.parAn]);
  const moisPourRembourser = Math.max(1, Math.ceil(19 / (e.fantomes * PRIX_TYPE)));

  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-5 pb-6 pt-8">
      <p className="chiffres text-sm text-brique">Ton estimation</p>
      <ul className="mt-4 space-y-2 text-lg">
        {phrases(r).map((p) => <li key={p}>{p}</li>)}
      </ul>

      <div className="mt-8 rounded-sm border border-encre/15 bg-white/60 p-5 shadow-[3px_3px_0_0_rgb(27_26_23/0.08)]">
        <p className="text-gris">
          Si seulement <strong className="text-encre">{e.fantomes} sur {e.total}</strong> sont des fantômes à {euros(PRIX_TYPE)} par mois :
        </p>
        <p className="font-titre mt-2 text-5xl font-extrabold text-brique">
          {euros(e.parAn)}<span className="text-2xl"> par an</span>
        </p>
        <p className="mt-2 text-gris">
          Soit <strong className="text-encre">{euros(e.surTroisAns)}</strong> en trois ans, pour des services dont tu ne te sers pas.
        </p>
      </div>

      <div className="mt-6 space-y-2 text-[17px]">
        <p className="font-semibold">Avec Fantômes :</p>
        <p>Tu vois les vrais chiffres de ton relevé en 2 minutes, classés par coût annuel, et une lettre de résiliation est prête pour chacun.</p>
        <p className="text-gris">L’audit complet coûte 19 €, une fois : remboursé en {moisPourRembourser === 1 ? "un mois" : `${moisPourRembourser} mois`} de fantômes en moins.</p>
      </div>

      <div className="sticky bottom-0 -mx-5 mt-auto bg-papier/95 px-5 pb-5 pt-6 backdrop-blur-sm">
        <Link href="/analyse" onClick={() => mesurer("vers-analyse")} className="block w-full rounded-md bg-sapin py-4 text-center text-lg font-semibold text-papier">
          Vérifier sur mon relevé — gratuit
        </Link>
        <p className="mt-2 text-center text-sm text-gris">Ton relevé reste sur ton téléphone. Rien n’est envoyé.</p>
      </div>
    </main>
  );
}
