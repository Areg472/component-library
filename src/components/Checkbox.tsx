"use client";

export function Checkbox({
  value,
  onChange,
  className,
}: {
  value?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}) {
  return (
    <input
      type="checkbox"
      className={className}
      checked={value}
      onChange={(e) => {
        onChange?.(e.target.checked);
      }}
    />
  );
}
