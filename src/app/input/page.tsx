import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import { Input } from "@/components/Input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areg's Component Library - Input",
  description:
    "A customizable input with custom classnames and onChange functionality.",
};

export default function InputPage() {
  const componentSource = `export function Input({
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
        className={\`pl-2 placeholder:text-gray-400 \${className}\`}
      />
    </>
  );
}`;

  const basicExample = `import {
    Input
} from "@/components/Input";

export default function Example() {
  return (
  <Input
    className="w-64 bg-black text-white h-10 rounded-l"
    type="email"
    placeholder="blahblah@email.com"
  />
  );
}
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Input</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable input component with support for custom classnames and
        onChange functionality.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Input Example" code={basicExample}>
        <Input
          className="w-64 bg-black text-white h-10 rounded-l"
          type="email"
          placeholder="blahblah@email.com"
        />
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Input</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                type: string, placeholder?: string, value?: string, onChange?:
                (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void,
                className?: string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
