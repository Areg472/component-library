"use client";

import {
  DocSidebar,
  DocSidebarGroup,
  DocSidebarHeading,
  DocSidebarItem,
} from "@/components/DocSidebar";
import { CodePreview } from "@/components/CodePreview";

export default function DocSidebarPage() {
  const componentSource = `"use client";

import { ReactNode, useState } from "react";

export function DocSidebar({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
}

export function DocSidebarItem({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <a href={href}>{children}</a>
    </div>
  );
}

export function DocSidebarGroup({
  title,
  children,
  defaultOpen = false,
  className,
  titleClassName,
  contentClassName,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button onClick={() => setIsOpen(!isOpen)} className={titleClassName}>
        {title}
        <svg
          className={\`transition-transform \${isOpen ? "rotate-180" : ""}\`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
}

export function DocSidebarHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <h4 className={className}>{text}</h4>;
}`;

  const copyComponentSource = () => {
    navigator.clipboard.writeText(componentSource);
  };
  const basicExample = `import {
  DocSidebar,
  DocSidebarHeading,
  DocSidebarGroup,
  DocSidebarItem,
} from "@/components/DocSidebar";

export default function Example() {
  return (
    <DocSidebar className="bg-gray-900 w-80 p-4 flex flex-col gap-2">
      <DocSidebarHeading
        text="Getting Started"
        className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase"
      />
      <DocSidebarItem href="#">
        <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
          Introduction
        </div>
      </DocSidebarItem>

      <DocSidebarGroup
        title="Components"
        defaultOpen={true}
        className="mt-2"
        titleClassName="flex w-full items-center justify-between px-4 py-2 text-left font-semibold text-white hover:bg-gray-800 rounded cursor-pointer"
        contentClassName="ml-2 mt-1 flex flex-col gap-1"
      >
        <DocSidebarItem href="#">
          <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
            Button
          </div>
        </DocSidebarItem>
        <DocSidebarItem href="#">
          <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
            Card
          </div>
        </DocSidebarItem>
      </DocSidebarGroup>
    </DocSidebar>
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Documentation Sidebar
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        A flexible and customizable sidebar component perfect for documentation
        sites. Features collapsible groups, headings, and navigation items.
      </p>

      <button
        onClick={copyComponentSource}
        className="cursor-pointer mb-8 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Copy Component Source Code
      </button>

      <CodePreview title="Documentation Sidebar Example" code={basicExample}>
        <DocSidebar className="bg-gray-900 w-80 p-4 flex flex-col gap-2">
          <DocSidebarHeading
            text="Getting Started"
            className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase"
          />
          <DocSidebarItem href="#">
            <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
              Introduction
            </div>
          </DocSidebarItem>

          <DocSidebarGroup
            title="Components"
            defaultOpen={true}
            className="mt-2"
            titleClassName="flex w-full items-center justify-between px-4 py-2 text-left font-semibold text-white hover:bg-gray-800 rounded cursor-pointer"
            contentClassName="ml-2 mt-1 flex flex-col gap-1"
          >
            <DocSidebarItem href="#">
              <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                Button
              </div>
            </DocSidebarItem>
            <DocSidebarItem href="#">
              <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                Card
              </div>
            </DocSidebarItem>
          </DocSidebarGroup>
        </DocSidebar>
      </CodePreview>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Props</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              DocSidebar
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                children: ReactNode, className?: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              DocSidebarHeading
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                text: string, className?: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              DocSidebarItem
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                children: ReactNode, href: string, className?: string
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              DocSidebarGroup
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-800">
                title: string, children: ReactNode, defaultOpen?: boolean,
                className?: string, titleClassName?: string, contentClassName?:
                string
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
