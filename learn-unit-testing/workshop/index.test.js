test("makeUrl will log the correct PokeAPI URL", () => {
    equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu");
    equal(makeUrl("bulbasaur"), "https://pokeapi.co/api/v2/bulbasaur");
  });