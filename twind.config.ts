import { Options } from "$fresh/plugins/twind.ts";
import { setup } from "twind";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      borderColor: {
        "primary": "#6b625f",
      },
    },
  },
} as Options;
