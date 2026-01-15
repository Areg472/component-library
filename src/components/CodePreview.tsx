"use client";

import { ReactNode, useState } from "react";

interface CodePreviewProps {
  children: ReactNode;
  code: string;
  title?: string;
}

export function CodePreview({ children, code, title }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden my-6">
      {title && (
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
      )}

      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => setActiveTab("preview")}
          className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "preview"
              ? "text-blue-600 border-b-2 border-blue-600 bg-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "code"
              ? "text-blue-600 border-b-2 border-blue-600 bg-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Code
        </button>
      </div>

      {activeTab === "preview" && (
        <div className="p-6 bg-white">{children}</div>
      )}

      {activeTab === "code" && (
        <div className="relative">
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            Copy
          </button>
          <pre className="p-6 bg-gray-900 text-gray-100 overflow-x-auto whitespace-pre-wrap break-words">
            <code className="text-sm">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
