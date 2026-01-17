const variants = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-white",
  info: "bg-teal-500 text-white",
  light: "bg-gray-200 text-gray-800",
  dark: "bg-gray-800 text-white",
};

export function Badge({
  variant,
  label,
}: {
  variant: keyof typeof variants;
  label: string;
}) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
