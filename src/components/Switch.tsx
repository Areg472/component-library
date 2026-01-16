"use client";

export function Switch({
  onChange,
  checked,
  className,
}: {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
}) {
  return (
    <label className={`relative inline-flex items-center cursor-pointer`}>
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={(e) => onChange?.(e.target.checked)}
        checked={checked}
      />
      <div
        className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${className}`}
      ></div>
    </label>
  );
}
