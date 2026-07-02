import { Suspense } from "react";
import ResultContent from "./ResultContent";

export default function ResultPage() {
  return (
    <Suspense fallback={<main className="max-w-3xl mx-auto p-6">Loading...</main>}>
      <ResultContent />
    </Suspense>
  );
}
