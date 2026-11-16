
"use client";

import { useState } from "react";
import Link from "next/link";

const todayQuestion = {
  number: "001",
  question: "లంచం ఇవ్వకుండా మన పని జరగాలంటే మనం ఏం మార్చాలి?",
  english:
    "What must change so that people can get their work done without paying a bribe?",
};

export default function AskPage() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanAnswer = answer.trim();

    if (cleanAnswer.length < 10 || cleanAnswer.length > 2000) {
      setError("Please enter an answer between 10 and 2000 characters.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/submit-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question_id: todayQuestion.number,
          answer_text: cleanAnswer,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#05090f] px-5 py-8 text-white">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm text-cyan-400">
            ← THE QUESTION
          </Link>
          <span className="text-xs tracking-widest text-slate-500">
            AI ASKING HUMANS
          </span>
        </header>

        <section className="mt-16 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_65px_rgba(34,211,238,0.15)]">
            <span className="text-6xl text-cyan-300">?</span>
          </div>

          <p className="mt-8 text-xs font-semibold tracking-[0.35em] text-cyan-400">
            QUESTION {todayQuestion.number}
          </p>

          <h1 className="mt-5 text-2xl font-bold leading-relaxed sm:text-4xl">
            {todayQuestion.question}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            {todayQuestion.english}
          </p>

          <p className="mt-8 text-sm text-cyan-300">
            ప్రశ్న. అన్వేషణ.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-9">
          {submitted ? (
            <div className="py-8 text-center" role="status">
              <div className="text-5xl text-cyan-300">✓</div>

              <h2 className="mt-5 text-2xl font-bold">
                Submitted for Review!
              </h2>

              <p className="mt-4 text-slate-400">
                Thank you for sharing your perspective.
                Your answer has been saved and is awaiting review.
                It is not publicly visible yet.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setAnswer("");
                  setError("");
                }}
                className="mt-8 rounded-xl border border-cyan-400/40 px-6 py-3 text-cyan-300"
              >
                Submit Another Answer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold">
                Your Answer Matters
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Share your perspective in any language.
                No public name required.
              </p>

              <textarea
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  setError("");
                }}
                minLength={10}
                maxLength={2000}
                required
                rows={7}
                placeholder="మీ సమాధానం ఇక్కడ రాయండి... / Write your answer here..."
                className="mt-6 w-full resize-y rounded-xl border border-white/15 bg-[#0c1521] p-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />

              <div className="mt-2 text-right text-xs text-slate-500">
                {answer.length}/2000
              </div>

              {error && (
                <p role="alert" className="mt-4 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Answer for Review"}
              </button>

              <p className="mt-5 text-center text-xs leading-6 text-slate-500">
                Answers are submitted for review before publication.
                Do not include sensitive personal information.
              </p>
            </form>
          )}
        </section>

        <footer className="py-12 text-center text-xs text-slate-500">
          THE QUESTION · ప్రశ్న. అన్వేషణ.
        </footer>
      </div>
    </main>
  );
}
