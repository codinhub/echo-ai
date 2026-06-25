import VoiceGenerator from "./VoiceGenerator";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
      <span className="rounded-full border border-violet-500 px-4 py-2 text-sm text-violet-400">
        🚀 AI Powered Text To Speech
      </span>

      <h1 className="mt-8 text-6xl font-extrabold leading-tight">
        Generate <span className="text-violet-500">Human-like</span> AI Voices
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-400">
        Convert text into studio-quality speech using multiple AI providers.
      </p>

      <VoiceGenerator />
    </section>
  );
}