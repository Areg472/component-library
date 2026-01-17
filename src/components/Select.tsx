export function Select({
  className,
  options,
  value,
  onChange,
}: {
  className: string;
  options: string[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <select onChange={onChange} className={className} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
