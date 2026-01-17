import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import type { Metadata } from "next";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Areg's Component Library - Badge",
  description:
    "A customizable badge component. this isnt gonna be like any other page metatag description :P",
};

export default function BadgePage() {
  const componentSource = `const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-teal-500 text-white",
    light: "bg-gray-200 text-gray-800",
    dark: "bg-gray-800 text-white",
  };

  export function Badge({
    variant,
    label,
  }: {
    variant: keyof typeof variants;
    label: string;
  }) {
    return (
      <span
        className={\`inline-block px-2 py-1 text-xs font-semibold rounded-full \${variants[variant]}\`}
      >
        {label}
      </span>
    );
  }
`;

  const basicExample = `import { Badge } from "@/components/Badge";

export default function Example() {
<div className="space-x-2">
  <Badge variant="primary" label="Primary" />
  <Badge variant="secondary" label="Secondary" />
  <Badge variant="warning" label="Warning" />
  <Badge variant="success" label="Success" />
  <Badge variant="danger" label="Danger" />
  <Badge variant="info" label="Info" />
  <Badge variant="light" label="Light" />
  <Badge variant="dark" label="Dark" />
</div>
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Badge</h1>
      <p className="text-lg text-gray-600 mb-4">
        A simple and customizable badge component.
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Badge Example" code={basicExample}>
        <div className="space-x-2">
          <Badge variant="primary" label="Primary" />
          <Badge variant="secondary" label="Secondary" />
          <Badge variant="warning" label="Warning" />
          <Badge variant="success" label="Success" />
          <Badge variant="danger" label="Danger" />
          <Badge variant="info" label="Info" />
          <Badge variant="light" label="Light" />
          <Badge variant="dark" label="Dark" />
        </div>
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Badge</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                variant: &quot;primary&quot; | &quot;secondary&quot; |
                &quot;success&quot; | &quot;danger&quot; | &quot;warning&quot; |
                &quot;info&quot; | &quot;light&quot; | &quot;dark&quot;, label:
                string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
