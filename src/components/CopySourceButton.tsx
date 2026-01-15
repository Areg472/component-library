"use client";

interface CopySourceButtonProps {
  sourceCode: string;
  className?: string;
}

export function CopySourceButton({ sourceCode, className = "" }: CopySourceButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(sourceCode);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`cursor-pointer px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      Copy Component Source Code
    </button>
  );
}
