import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";
import { Switch } from "@/components/Switch";

export const metadata: Metadata = {
  title: "Areg's Component Library - Switch",
  description:
    "A customizable switch component with custom classnames, checked, and onChange functionality.",
};

export default function LabelPage() {
  const componentSource = `"use client";

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
    <label className={\`relative inline-flex items-center cursor-pointer\`}>
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={(e) => onChange?.(e.target.checked)}
        checked={checked}
      />
      <div
        className={\`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:border after:rounded-full after:h-5 after:w-5 after:transition-all \${className}\`}
      ></div>
    </label>
  );
}`;

  const basicExample = `import { Switch } from "@/components/Switch";

export default function Example() {
  return (
    <Switch className="bg-gray-200 peer-checked:bg-blue-600 after:bg-white after:border-gray-300" />
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Label</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable label component with support for custom classnames.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Label Example" code={basicExample}>
        <Switch className="bg-gray-200 peer-checked:bg-blue-600 after:bg-white after:border-gray-300" />
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Switch</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                onChange?: (checked: boolean) =&gt; void, checked?: boolean,
                className?: string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
