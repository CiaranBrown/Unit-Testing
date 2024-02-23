test("makeUrl will log the correct PokeAPI URL", () => {
    equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu");
    equal(makeUrl("bulbasaur"), "https://pokeapi.co/api/v2/bulbasaur");
});

test("searchParamsToObject will create an object from a string", (t) => {
    const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
    const expected = { name: "oliver", email: "hello@oliverjam.es" };
    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
});

