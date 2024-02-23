// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(string) {
  const params = new URLSearchParams(string);
  return Object.fromEntries(params);
}