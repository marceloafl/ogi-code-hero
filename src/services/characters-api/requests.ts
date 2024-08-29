import { getHash } from "./utils";

// const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;

const MARVEL_PUBLIC_KEY = "5edcf475d38f8ae1959d64818859fcce";

export async function getCharacters(
  resultsPerPage: number,
  offset: number,
  searchTerm = ""
) {
  const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
  const ts = new Date().getTime().toString();
  const hash = getHash(ts);

  const paramsObject = new URLSearchParams({
    limit: resultsPerPage.toString(),
    offset: offset.toString(),
    apikey: MARVEL_PUBLIC_KEY,
    ts: ts,
    hash: hash,
  });

  if (searchTerm) {
    paramsObject.append("nameStartsWith", searchTerm);
  }

  const params = new URLSearchParams(paramsObject);

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
