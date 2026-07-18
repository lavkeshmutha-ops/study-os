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
            { from: { element: { type: "app" } }, allow: [{ element: { type: "feature" } }, { element: { type: "lib" } }, { element: { type: "components" } }, { element: { type: "app" } }] },
            { 
              from: { element: { type: "feature" } }, 
              allow: [
                { element: { type: "lib" } }, 
                { element: { type: "components" } },
                { element: { type: "app" } },
                { element: { type: "feature" } }
              ] 
            },
            { from: { element: { type: "lib" } }, allow: [{ element: { type: "lib" } }] },
            { from: { element: { type: "components" } }, allow: [{ element: { type: "lib" } }, { element: { type: "components" } }, { element: { type: "app" } }] },
            { from: { element: { type: "tests" } }, allow: [{ element: { type: "app" } }, { element: { type: "feature" } }, { element: { type: "lib" } }, { element: { type: "components" } }, { element: { type: "tests" } }] }
          ]
        }
      ]
    }
  }
]);

export default eslintConfig;
