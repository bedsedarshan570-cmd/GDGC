import { GoogleGenAI } from "@google/genai";
import { AI } from "@/config/app.config";
import { RoastRequest, RoastResult } from "@/types/roast";
import { buildUserPrompt, ROAST_SYSTEM_INSTRUCTION } from "./prompt";
import { roastResponseSchema } from "./schema";

function friendlyErrorMessage(status: number | undefined, error: unknown): string {
  const message =
    error instanceof Error ? error.message : typeof error === "object" && error !== null && "message" in error ? String((error as any).message) : String(error);

  if (status === 400) {
    return `Invalid request to Gemini API (400). Please check input formatting. Details: ${message}`;
  }
  if (status === 403) {
    return `Gemini API key is invalid or unauthorized (403). Verify GEMINI_API_KEY in .env.local.`;
  }
  if (status === 404) {
    return `Gemini model "${AI.model}" was not found (404). Check AI.model in config/app.config.ts or model availability for your key.`;
  }
  if (status === 429) {
    return `Gemini API rate limit exceeded (429). Please wait a few seconds and try again.`;
  }
  if (status === 503) {
    return `Gemini service is temporarily overloaded (503) after multiple retry attempts. Please retry shortly.`;
  }
  return `Gemini API error (${status ?? "unknown"}): ${message}`;
}

export async function analyzeCode(request: RoastRequest): Promise<RoastResult> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is missing. Copy .env.example to .env.local, add your key, and restart the server."
    );
  }

  const ai = new GoogleGenAI({ apiKey });
  const contents = buildUserPrompt(request);

  let attempt = 0;
  while (attempt < AI.maxAttempts) {
    attempt++;
    try {
      const response = await ai.models.generateContent({
        model: AI.model,
        contents,
        config: {
          systemInstruction: ROAST_SYSTEM_INSTRUCTION,
          responseMimeType: "application/json",
          responseSchema: roastResponseSchema,
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("Gemini returned an empty response.");
      }

      let parsed: any;
      try {
        parsed = JSON.parse(text);
      } catch {
        throw new Error(`Failed to parse Gemini response as JSON: ${text}`);
      }

      return {
        roast: parsed.roast ?? "",
        issues: Array.isArray(parsed.issues) ? parsed.issues : [],
        correctedCode: parsed.correctedCode ?? "",
        takeaway: parsed.takeaway ?? "",
      };
    } catch (error: any) {
      const status = error?.status ?? error?.statusCode ?? error?.response?.status;
      if (status === 503 && attempt < AI.maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
        continue;
      }
      throw new Error(friendlyErrorMessage(status, error));
    }
  }

  throw new Error("Maximum retry attempts reached for Gemini analysis.");
}
