import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import boundaries from "eslint-plugin-boundaries";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: { boundaries },
    settings: {
      "boundaries/elements": [
        { type: "app", pattern: "app/**/*" },
        { type: "feature", pattern: "features/*/**/*", capture: ["featureName"] },
        { type: "lib", pattern: "lib/**/*" },
        { type: "components", pattern: "components/**/*" },
        { type: "tests", pattern: "tests/**/*" },
      ],
      "boundaries/ignore": ["**/*.test.*"]
    },
    rules: {
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          policies: [
            { from: "app", allow: ["feature", "lib", "components", "app"] },
            { 
              from: "feature", 
              allow: [
                "lib", 
                "components",
                "app",
                "feature"
              ] 
            },
            { from: "lib", allow: ["lib"] },
            { from: "components", allow: ["lib", "components", "app"] },
            { from: "tests", allow: ["app", "feature", "lib", "components", "tests"] }
          ]
        }
      ]
    }
  }
]);

export default eslintConfig;
