import { getHash } from "./utils";

// const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;

const MARVEL_PUBLIC_KEY = "5edcf475d38f8ae1959d64818859fcce";

export async function getCharacters() {
  const ts = new Date().getTime().toString();
  const hash = getHash(ts);

  try {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?apikey=${MARVEL_PUBLIC_KEY}&ts=${ts}&hash=${hash}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
