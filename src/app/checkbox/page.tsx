import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import { Checkbox } from "@/components/Checkbox";
import type { Metadata } from "next";
import { Label } from "@/components/Label";

export const metadata: Metadata = {
  title: "Areg's Component Library - Checkbox",
  description:
    "A customizable checkbox with custom classnames and onChange functionality.",
};

export default function CheckboxPage() {
  const componentSource = `"use client";

  export function Checkbox({
    value,
    onChange,
    className,
  }: {
    value?: boolean;
    onChange?: (value: boolean) => void;
    className?: string;
  }) {
    return (
      <input
        type="checkbox"
        className={className}
        checked={value}
        onChange={(e) => {
          onChange?.(e.target.checked);
        }}
      />
    );
  }
`;

  const basicExample = `import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";

export default function Example() {
  return (
  <div className="flex flex-row">
    <Checkbox className=" bg-black rounded-l cursor-pointer" />
    <Label className="text-black ml-2" label="Checkbox" />
  </div>
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

      <CodePreview title="Checkbox Example" code={basicExample}>
        <div className="flex flex-row">
          <Checkbox className=" bg-black rounded-l cursor-pointer" />
          <Label className="text-black ml-2" label="Checkbox" />
        </div>
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Input</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                value?: boolean, onChange?: (value: boolean) =&gt; void,
                className?: string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
