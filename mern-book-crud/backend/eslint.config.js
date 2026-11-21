import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.js"],
        extends: [js.configs.recommended],
        languageOptions: {
            globals: globals.node,
        },
    },
    prettier,
]);
