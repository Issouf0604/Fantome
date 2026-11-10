import Link from "next/link";
import Pied from "./Pied";

export default function PageTexte({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto max-w-xl px-5 pb-6 pt-8">
        <Link href="/" className="font-titre text-lg font-extrabold">Fantômes</Link>
        <h1 className="font-titre mt-8 text-3xl font-extrabold leading-tight">{titre}</h1>
        <div className="texte-legal mt-6 space-y-4 leading-relaxed">{children}</div>
      </main>
      <Pied />
    </>
  );
}
