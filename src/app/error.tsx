"use client";
import Link from "next/link";

export default function Erreur({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5">
      <p className="chiffres text-brique">Petit accroc</p>
      <h1 className="font-titre mt-3 text-4xl font-extrabold leading-tight">Quelque chose n’a pas marché.</h1>
      <p className="mt-4 text-lg text-gris">Ce n’est pas toi, c’est nous. Réessaie : ça passe presque toujours.</p>
      <button onClick={reset} className="mt-8 rounded-md bg-sapin py-4 text-lg font-semibold text-papier">
        Réessayer
      </button>
      <Link href="/" className="mt-4 py-2 text-center underline underline-offset-4">
        Revenir à l’accueil
      </Link>
    </main>
  );
}
