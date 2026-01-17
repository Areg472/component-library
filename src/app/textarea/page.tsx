import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";
import { Textarea } from "@/components/Textarea";

export const metadata: Metadata = {
  title: "Areg's Component Library - Textarea",
  description:
    "A customizable textarea component with support for custom classnames, onChange, and placeholder.",
};

export default function TextareaPage() {
  const componentSource = `export function Textarea({
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
      className={\`resize-y \${className}\`}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
`;

  const basicExample = `import { Textarea } from "@/components/Textarea";

export default function Example() {
  return (
  <Textarea className="text-black w-52 h-36 border-black border-2 min-h-10 max-h-52" />
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Textarea</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable textarea component with support for custom classnames,
        onChange, and placeholder.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Textarea Example" code={basicExample}>
        <Textarea className="text-black w-52 h-36 border-black border-2 min-h-10 max-h-52" />
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Textarea
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                className?: string, placeholder?: string, onChange?: (e:
                React.ChangeEvent&lt;HTMLTextAreaElement&gt;) =&gt; void
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
