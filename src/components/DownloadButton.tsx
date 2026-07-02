"use client";

interface DownloadButtonProps {
  filename: string;
  code: string;
}

export default function DownloadButton({ filename, code }: DownloadButtonProps) {
  function handleDownload() {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
    >
      Download {filename}
    </button>
  );
}
