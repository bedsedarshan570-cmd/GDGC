import { Type, Schema } from "@google/genai";
import { SEVERITIES } from "@/config/app.config";

export const roastResponseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    roast: {
      type: Type.STRING,
      description: "Hinglish witty critique of the code.",
    },
    issues: {
      type: Type.ARRAY,
      description: "List of issues found in the code.",
      items: {
        type: Type.OBJECT,
        properties: {
          line: {
            type: Type.INTEGER,
            description: "1-based line number of the issue.",
          },
          severity: {
            type: Type.STRING,
            enum: [...SEVERITIES],
            description: "Severity classification.",
          },
          title: {
            type: Type.STRING,
            description: "Short title in Hinglish with emoji.",
          },
          codeSnippet: {
            type: Type.STRING,
            description: "Problematic code snippet verbatim.",
          },
          diagnosis: {
            type: Type.STRING,
            description: "What went wrong in Hinglish with emoji.",
          },
          expected: {
            type: Type.STRING,
            description: "Expected behavior or fix explanation in Hinglish with emoji.",
          },
        },
        required: [
          "line",
          "severity",
          "title",
          "codeSnippet",
          "diagnosis",
          "expected",
        ],
      },
    },
    correctedCode: {
      type: Type.STRING,
      description: "Complete corrected program.",
    },
    takeaway: {
      type: Type.STRING,
      description: "Key architectural takeaway in Hinglish.",
    },
  },
  required: ["roast", "issues", "correctedCode", "takeaway"],
};
