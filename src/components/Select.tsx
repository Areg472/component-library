export function Select({
  className,
  options,
  onChange,
}: {
  className: string;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <select onChange={onChange} className={className}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
