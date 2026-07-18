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
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "app", allow: ["feature", "lib", "components"] },
            { 
              from: "feature", 
              allow: [
                "lib", 
                "components", 
                ["feature", { featureName: "${from.featureName}" }] 
              ] 
            },
            { from: "lib", allow: ["lib"] },
            { from: "components", allow: ["lib", "components"] },
            { from: "tests", allow: ["app", "feature", "lib", "components", "tests"] }
          ]
        }
      ]
    }
  }
]);

export default eslintConfig;
