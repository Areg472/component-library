export function Textarea({
  className,
  placeholder,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      className={`resize-y ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
