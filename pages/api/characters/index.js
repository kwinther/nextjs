export default async function handler(req, res) {
  const fetchResult = await fetch("https://rickandmortyapi.com/api/character");
  const chars = await fetchResult.json();
  const characters = await chars.results;
  res.status(200).json(characters);
}
