import { Button } from "@/components/Button";
import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areg's Component Library - Button",
  description:
    "A customizable button with custom classnames and onClick functionality.",
};

export default function ButtonPage() {
  const componentSource = `"use client";

  export default function Button({
    text,
    onClick,
    className,
  }: {
    text?: string;
    onClick?: () => void | undefined;
    className?: string;
    }) {
      return (
        <button onClick={onClick} className={\`\${className}\`}>
          {text}
        </button>
      );
    }
  \`;`;

  const basicExample = `import {
    Button
} from "@/components/Button";

export default function Example() {
  return (
  <Button
    className="w-52 bg-black text-white h-10 rounded-xl cursor-pointer"
    text="Click Me"
  />
  );
}
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Button</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable button component with support for custom classnames and
        onClick functionality.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Button Example" code={basicExample}>
        <Button
          className="w-52 bg-black text-white h-10 rounded-xl cursor-pointer"
          text="Click Me"
        />
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Button</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                text?: string, onClick?: () =&gt; void, className?: string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
