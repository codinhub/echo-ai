import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex h-[80vh] items-center justify-center">
        <h1 className="text-6xl font-bold">
          Echo<span className="text-violet-500">AI</span>
        </h1>
      </section>
    </main>
  );
}