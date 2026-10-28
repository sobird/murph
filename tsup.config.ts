import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  clean: true,
  dts: { resolve: false },
  sourcemap: true,
  treeshake: true,
});
