import { getHash } from "../utils";

const MARVEL_PUBLIC_KEY = "5edcf475d38f8ae1959d64818859fcce";

export async function getMedias(
  characterId: string,
  mediaType: "comics" | "series"
) {
  const baseUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/${mediaType}`;
  const ts = new Date().getTime().toString();
  const hash = getHash(ts);

  const params = new URLSearchParams({
    apikey: MARVEL_PUBLIC_KEY,
    ts: ts,
    hash: hash,
  });
  try {
    const response = await fetch(`${baseUrl}?${params}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
