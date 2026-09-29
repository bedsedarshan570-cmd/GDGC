import { analyzeCode } from "../lib/gemini";
import { AI, SAMPLE } from "../config/app.config";

async function main() {
  console.log(`[CHECK] Testing Gemini API integration with model: ${AI.model}...`);

  try {
    const result = await analyzeCode({
      language: SAMPLE.language,
      code: SAMPLE.code,
      roastLevel: "sharp",
      errorMessage: "TypeError: unsupported operand type(s) for +=: 'int' and 'list' at line 5",
    });

    console.log("\n[SUCCESS] API Response received from Gemini:");
    console.log("--------------------------------------------------");
    console.log("Roast critique:\n", result.roast);
    console.log("\nIssues detected count:", result.issues.length);
    result.issues.forEach((issue, idx) => {
      console.log(`  [#${idx + 1}] Line ${issue.line}: ${issue.title} (${issue.severity})`);
    });
    console.log("\nCorrected code preview:\n", result.correctedCode);
    console.log("\nTakeaway:\n", result.takeaway);
    console.log("--------------------------------------------------");
    console.log("[PASS] Gemini API check completed successfully.");
  } catch (error: any) {
    console.error("\n[FAIL] Gemini API check failed:");
    console.error(error?.message || error);
    process.exit(1);
  }
}

main();
