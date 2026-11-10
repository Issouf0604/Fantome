import type { Metadata } from "next";
import Diagnostic from "./Diagnostic";

export const metadata: Metadata = {
  title: "3 questions — Fantômes",
  description: "Trois questions pour savoir combien tes abonnements oubliés te coûtent chaque année.",
};

export default function Page() {
  return <Diagnostic />;
}
