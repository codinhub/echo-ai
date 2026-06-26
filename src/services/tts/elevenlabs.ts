import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export async function generateSpeech(text: string) {
  return client.textToSpeech.convert(
    "JBFqnCBsd6RMkjVDRZzb",
    {
      text,
      modelId: "eleven_multilingual_v2",
      outputFormat: "mp3_44100_128",
    }
  );
}