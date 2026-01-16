"use client";

export function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
}: {
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`pl-2 placeholder:text-gray-400 ${className}`}
      />
    </>
  );
}
