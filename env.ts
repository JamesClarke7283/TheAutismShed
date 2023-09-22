import "$std/dotenv/load.ts";

export const EMAIL_ADDRESS = Deno.env.get("EMAIL_ADDRESS") || "";
export const EMAIL_PASSWORD = Deno.env.get("EMAIL_PASSWORD") || "";
export const EMAIL_TO = Deno.env.get("EMAIL_TO") || "";
