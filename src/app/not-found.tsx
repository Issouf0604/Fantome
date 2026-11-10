import Link from "next/link";

export default function Introuvable() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5">
      <p className="chiffres text-brique">Erreur 404</p>
      <h1 className="font-titre mt-3 text-4xl font-extrabold leading-tight">Cette page s’est volatilisée.</h1>
      <p className="mt-4 text-lg text-gris">
        Comme un abonnement qu’on aurait enfin résilié. Le reste du site, lui, est bien là.
      </p>
      <Link href="/" className="mt-8 block rounded-md bg-sapin py-4 text-center text-lg font-semibold text-papier">
        Revenir à l’accueil
      </Link>
    </main>
  );
}
