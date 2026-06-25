"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function VoiceGenerator() {
  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
      <Textarea
        placeholder="Type or paste your text here..."
        className="min-h-[180px] bg-zinc-950 border-zinc-700"
      />

      <div className="mt-6 flex flex-wrap gap-4">
        <select className="rounded-lg bg-zinc-800 px-4 py-2">
          <option>Sarah</option>
          <option>Adam</option>
          <option>Rachel</option>
        </select>

        <select className="rounded-lg bg-zinc-800 px-4 py-2">
          <option>English</option>
          <option>Hindi</option>
          <option>Punjabi</option>
        </select>

        <Button>🎤 Generate Voice</Button>
      </div>
    </div>
  );
}