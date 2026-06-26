"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function VoiceGenerator() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function generateVoice() {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Voice generation failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setAudioUrl(url);
    } catch (err) {
      console.error(err);
      alert("Failed to generate voice.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
        className="min-h-[180px]"
      />

      <Button
        className="mt-6"
        disabled={loading}
        onClick={generateVoice}
      >
        {loading ? "Generating..." : "Generate Voice"}
      </Button>

      {audioUrl && (
        <div className="mt-6 space-y-3">
          <audio controls src={audioUrl} className="w-full" />

          <a href={audioUrl} download="voice.mp3">
            <Button variant="outline">
              Download MP3
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}