// const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;

import { getHash } from "../utils";

const MARVEL_PUBLIC_KEY = "5edcf475d38f8ae1959d64818859fcce";

export async function getCharacterById(id: string) {
  const baseUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}`;
  const ts = new Date().getTime().toString();
  const hash = getHash(ts);

  const params = new URLSearchParams({
    apikey: MARVEL_PUBLIC_KEY,
    ts: ts,
    hash: hash,
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error; // Re-throw the error for the calling function to handle
  }
}
