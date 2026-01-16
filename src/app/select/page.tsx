import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";
import { Select } from "@/components/Select";

export const metadata: Metadata = {
  title: "Areg's Component Library - Select",
  description:
    "A customizable select component with support for custom classnames, onChange, and options.",
};

export default function SelectPage() {
  const options = ["hey", "hello", "hi"];
  const componentSource = `export function Select({
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
`;

  const basicExample = `import { Select } from "@/components/Select";

export default function Example() {
  const options = ["hey", "hello", "hi"];
  return (
  <Select
    options={options}
    className="text-black border-2 border-black rounded-md cursor-pointer w-20"
  />
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Select</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable select component with support for custom classnames,
        onChange, and options.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Textarea Example" code={basicExample}>
        <Select
          options={options}
          className="text-black border-2 border-black rounded-md cursor-pointer w-20"
        />
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Select</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                className: string, options: string[], onChange?: (event:
                React.ChangeEvent&lt;HTMLSelectElement&gt;) =&gt; void
              </code>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              <strong>Note:</strong> The{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">options</code>{" "}
              prop is required and must be an array of strings. Each string in
              the array will be rendered as an option in the select dropdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
