import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block rounded-full border border-purple-600 px-4 py-2 text-sm text-purple-400">
          🚀 AI Powered Voice Generation
        </div>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight">
          Generate
          <span className="text-purple-500"> Human-like </span>
          AI Voices
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Convert text into realistic speech with studio-quality AI voices in
          over 100 languages.
        </p>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <textarea
            placeholder="Type or paste your text here..."
            className="w-full h-48 resize-none rounded-xl bg-zinc-950 p-5 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <select className="rounded-xl bg-zinc-800 px-5 py-3">
              <option>Sarah</option>
              <option>Adam</option>
              <option>Rachel</option>
            </select>

            <select className="rounded-xl bg-zinc-800 px-5 py-3">
              <option>English</option>
              <option>Hindi</option>
              <option>Punjabi</option>
            </select>

            <button className="rounded-xl bg-purple-600 px-8 py-3 font-semibold hover:bg-purple-700">
              🎤 Generate Voice
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-400">
          <span>⚡ Ultra Fast</span>
          <span>🌍 100+ Languages</span>
          <span>🎧 Studio Quality</span>
          <span>⬇ MP3 Download</span>
        </div>
      </section>
    </main>
  );
}