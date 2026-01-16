import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";
import { Label } from "@/components/Label";

export const metadata: Metadata = {
  title: "Areg's Component Library - Label",
  description:
    "A customizable label with custom classnames and onChange functionality.",
};

export default function LabelPage() {
  const componentSource = `export function Label({
    className,
    label,
  }: {
    className?: string;
    label: string;
  }) {
    return <label className={className}>{label}</label>;
  }
`;

  const basicExample = `import { Label } from "@/components/Label";

export default function Example() {
  return (
    <Label className="text-black" label="A serious title" />
  );
}
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Label</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable label component with support for custom classnames.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Label Example" code={basicExample}>
        <Label className="text-black" label="A serious title" />
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Input</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                className?: string, label: string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
