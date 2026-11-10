export default function V({ v }: { v: string }) {
  return v.startsWith("[") ? <span className="a-remplir">{v}</span> : <>{v}</>;
}
