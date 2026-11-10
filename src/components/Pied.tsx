import Link from "next/link";

export default function Pied() {
  return (
    <footer className="mx-auto max-w-xl px-5 pb-8 pt-6 text-sm text-gris">
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/mentions-legales" className="underline-offset-4 hover:underline">Mentions légales</Link>
        <Link href="/cgv" className="underline-offset-4 hover:underline">CGV</Link>
        <Link href="/confidentialite" className="underline-offset-4 hover:underline">Confidentialité</Link>
      </nav>
      <p className="mt-3">© {new Date().getFullYear()} Fantômes</p>
    </footer>
  );
}
