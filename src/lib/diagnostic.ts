export type Reponses = { nombre: number; essai: number; releve: number };

export const QUESTIONS = [
  {
    cle: "nombre",
    titre: "À ton avis, combien de prélèvements réguliers passent sur ton compte chaque mois ?",
    aide: "Streaming, musique, téléphone, box, cloud, appli, salle de sport, presse… Compte de tête.",
    options: ["1 à 3", "4 à 6", "7 à 10", "Plus de 10"],
  },
  {
    cle: "essai",
    titre: "As-tu déjà lancé un essai gratuit… sans être sûr de l’avoir résilié ?",
    aide: "Ceux qui demandent ta carte « juste pour vérifier » et passent payants sans prévenir.",
    options: ["Oui, sûrement", "Je ne sais plus", "Jamais"],
  },
  {
    cle: "releve",
    titre: "Quand as-tu relu ton relevé ligne par ligne pour la dernière fois ?",
    aide: "Pas juste le solde : chaque ligne, chaque libellé.",
    options: ["Ce mois-ci", "Cette année", "Je ne m’en souviens pas"],
  },
] as const;

const NOMBRE_MOYEN = [2, 5, 8, 12];
export const PRIX_TYPE = 9.99; // un abonnement typique, pour l'illustration

/** Estimation volontairement prudente : jamais plus de la moitié des abonnements déclarés. */
export function estimer(r: Reponses) {
  const total = NOMBRE_MOYEN[r.nombre];
  let fantomes = 1;
  if (r.essai <= 1) fantomes += 1;
  if (r.releve === 2) fantomes += 1;
  if (r.releve === 1 && r.nombre >= 2) fantomes += 1;
  fantomes = Math.min(fantomes, Math.max(1, Math.floor(total / 2)));
  const parAn = Math.round(fantomes * PRIX_TYPE * 12);
  return { total, fantomes, parAn, surTroisAns: parAn * 3 };
}

export const euros = (n: number) =>
  n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: n % 1 ? 2 : 0 });

export function phrases(r: Reponses): string[] {
  const q = QUESTIONS;
  const p = [`Tu penses avoir ${q[0].options[r.nombre].toLowerCase()} prélèvements réguliers chaque mois.`];
  if (r.essai === 0) p.push("Tu as sûrement un essai gratuit qui s’est transformé en abonnement.");
  if (r.essai === 1) p.push("Tu ne sais plus si tes essais gratuits ont bien été résiliés.");
  if (r.releve === 2) p.push("Et tu ne te souviens pas de la dernière fois où tu as relu ton relevé.");
  if (r.releve === 1) p.push("Et ta dernière vraie relecture de relevé date de plusieurs mois.");
  return p;
}
