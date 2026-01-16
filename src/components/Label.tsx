export function Label({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return <label className={className}>{label}</label>;
}
