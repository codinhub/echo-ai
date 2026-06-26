import { NextRequest } from "next/server";
import { generateSpeech } from "@/services/tts/elevenlabs";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || text.trim().length === 0) {
      return Response.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const audio = await generateSpeech(text);

    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Voice generation failed" },
      { status: 500 }
    );
  }
}