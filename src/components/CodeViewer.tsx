"use client";

import { useState } from "react";

interface CodeViewerProps {
  code: string;
}

export default function CodeViewer({ code }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleCopy}
          className="border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-100"
        >
          {copied ? "Copied!" : "Copy code"}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 text-sm rounded p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
