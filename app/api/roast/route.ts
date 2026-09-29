import { NextRequest, NextResponse } from "next/server";
import { DEFAULTS, LANGUAGES, LIMITS, ROAST_LEVELS } from "@/config/app.config";
import { analyzeCode } from "@/lib/gemini";
import { LanguageId, RoastLevel } from "@/types/roast";

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const code = typeof body?.code === "string" ? body.code : "";
  const errorMessage =
    typeof body?.errorMessage === "string" ? body.errorMessage.trim() : "";

  // 1. Validate empty code
  if (!code.trim()) {
    return NextResponse.json({ error: "No code provided." }, { status: 400 });
  }

  // 2. Validate code length
  if (code.length > LIMITS.maxCodeLength) {
    return NextResponse.json(
      {
        error: `Code exceeds maximum allowed length of ${LIMITS.maxCodeLength.toLocaleString()} characters.`,
      },
      { status: 400 }
    );
  }

  // 3. Validate error message length
  if (errorMessage.length > LIMITS.maxErrorMessageLength) {
    return NextResponse.json(
      {
        error: `Error message exceeds maximum allowed length of ${LIMITS.maxErrorMessageLength.toLocaleString()} characters.`,
      },
      { status: 400 }
    );
  }

  // 4. Fallback for language and roastLevel
  const validLanguages = LANGUAGES.map((l) => l.id);
  const validRoastLevels = ROAST_LEVELS.map((r) => r.id);

  const language: LanguageId = validLanguages.includes(body?.language)
    ? body.language
    : DEFAULTS.language;

  const roastLevel: RoastLevel = validRoastLevels.includes(body?.roastLevel)
    ? body.roastLevel
    : DEFAULTS.roastLevel;

  try {
    const result = await analyzeCode({
      language,
      code,
      roastLevel,
      errorMessage: errorMessage || undefined,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("[ROAST_API_ERROR]", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
