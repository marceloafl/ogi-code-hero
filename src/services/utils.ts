import crypto from "crypto";

const MARVEL_PUBLIC_KEY = "5edcf475d38f8ae1959d64818859fcce";
const MARVEL_PRIVATE_KEY = "771c4d2a332dbe02c9c794a28df482a714bfa904";

export const getHash = (ts: string): string => {
  return crypto
    .createHash("md5")
    .update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
    .digest("hex");
};
