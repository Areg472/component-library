"use client";

export function Button({
  text,
  onClick,
  className,
}: {
  text?: string;
  onClick?: (() => void) | undefined;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`${className}`}>
      {text}
    </button>
  );
}
