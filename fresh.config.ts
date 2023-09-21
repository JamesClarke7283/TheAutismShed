import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import { freshSEOPlugin } from "https://deno.land/x/fresh_seo@1.0.1/mod.ts";
import manifest from "./fresh.gen.ts";
import twindConfig from "./twind.config.ts";
export default defineConfig({
  plugins: [
    twindPlugin(twindConfig),
    freshSEOPlugin(manifest, {
      include: ["/"],
    }),
  ],
});
