export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-lg ${className}`}>{children}</div>;
}

export function CardHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <h3 className={`${className} text-lg`}>{title}</h3>;
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CardDescription({
  description,
  className,
}: {
  description: string;
  className: string;
}) {
  return <p className={`${className} text-sm`}>{description}</p>;
}

export function CardFooter({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return <p className={`${className} text-sm`}>{text}</p>;
}
