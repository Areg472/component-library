import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { CodePreview } from "@/components/CodePreview";
import { CopySourceButton } from "@/components/CopySourceButton";
import { Label } from "@/components/Label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areg's Component Library - Card",
  description:
    "A customizable Card component with support for custom classnames, sections, and more!",
};

export default function SelectPage() {
  const componentSource = `export function Card({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return <div className={\`rounded-lg \${className}\`}>{children}</div>;
  }

  export function CardHeader({
    title,
    className,
  }: {
    title: string;
    className?: string;
  }) {
    return <h3 className={\`\${className} text-lg\`}>{title}</h3>;
  }

  export function CardContent({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return <div className={className}>{children}</div>;
  }

  export function CardDescription({
    description,
    className,
  }: {
    description: string;
    className: string;
  }) {
    return <p className={\`\${className} text-sm\`}>{description}</p>;
  }

  export function CardFooter({
    className,
    text,
  }: {
    className?: string;
    text: string;
  }) {
    return <p className={\`\${className} text-sm\`}>{text}</p>;
  }`;

  const basicExample = `import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";

export default function Example() {
  return (
  <Card className="w-64 h-52 bg-black border-4 border-gray-500">
    <CardHeader
      title="Cool card"
      className="text-white mt-2 ml-4 text-2xl font-bold"
    />
    <CardDescription
      description="lorem epsum idk what"
      className="text-gray-300 pl-4"
    />
    <CardContent className="border-white border-2 ml-4 mt-3 w-36 rounded-lg h-24">
      <div className="flex flex-row mt-3.5 ml-4">
        <Checkbox />
        <Label className="text-white ml-2" label="Hello" />
      </div>
      <a href="#">
        <Button
          className="bg-black border-2 border-white rounded-lg ml-4 mt-2 cursor-pointer w-20 h-10"
          text="Click"
        />
      </a>
    </CardContent>
    <CardFooter
      text="psst baby shark dodododododo"
      className="text-gray-300 ml-4 mt-1"
    />
  </Card>
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Card</h1>
      <p className="text-lg text-gray-600 mb-4">
        A customizable Card component with support for custom classnames,
        sections, and more!
      </p>

      <CopySourceButton sourceCode={componentSource} className="mb-8" />

      <CodePreview title="Card Example" code={basicExample}>
        <Card className="w-64 h-52 bg-black border-4 border-gray-500">
          <CardHeader
            title="Cool card"
            className="text-white mt-2 ml-4 text-2xl font-bold"
          />
          <CardDescription
            description="lorem epsum idk what"
            className="text-gray-300 pl-4"
          />
          <CardContent className="border-white border-2 ml-4 mt-3 w-36 rounded-lg h-24">
            <div className="flex flex-row mt-3.5 ml-4">
              <Checkbox />
              <Label className="text-white ml-2" label="Hello" />
            </div>
            <a href="#">
              <Button
                className="bg-black border-2 border-white rounded-lg ml-4 mt-2 cursor-pointer w-20 h-10"
                text="Click"
              />
            </a>
          </CardContent>
          <CardFooter
            text="psst baby shark dodododododo"
            className="text-gray-300 ml-4 mt-1"
          />
        </Card>
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Card</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                children: React.ReactNode, className?: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              CardHeader
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                title: string, className?: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              CardContent
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                children: React.ReactNode, className?: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              CardDescription
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                description: string, className: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              CardFooter
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                text: string, className?: string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
