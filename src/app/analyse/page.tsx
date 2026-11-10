import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5">
      <p className="chiffres text-brique">Étape suivante</p>
      <h1 className="font-titre mt-3 text-4xl font-extrabold leading-tight">L’analyse du relevé arrive très bientôt.</h1>
      <p className="mt-4 text-lg text-gris">On met la dernière main au détecteur. Reviens dans quelques heures.</p>
      <Link href="/" className="mt-8 block rounded-md bg-sapin py-4 text-center text-lg font-semibold text-papier">Revenir à l’accueil</Link>
    </main>
  );
}
