// Quando for usar DOIS ou MAIS "await fetch" no MESMO COMPONENTE que NÃO Dependem entre si (pq isso o NextJS gerencia),
// usar Promise.all !!!

export async function TwoOrMoreAwaitFetch() {
  const [response, response2, response3] = await Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon/ditto"),

    fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon",
    ),

    fetch("https://viacep.com.br/ws/96200010/json/"),
  ]);

  const dittoPokemon = await response.json();
  const tornadoCard = await response2.json();
  const rioGrandeDoSulCEP = await response3.json();

  return (
    <div>
      <h2>Two Await Fetch !</h2>

      <h3>Ditto Pokemon</h3>
      <pre>{JSON.stringify(dittoPokemon, null, 2)}</pre>

      <h3>Tornado Card</h3>
      <pre>{JSON.stringify(tornadoCard, null, 2)}</pre>

      <h3>Rio Grande do Sul CEP</h3>
      <pre>{JSON.stringify(rioGrandeDoSulCEP, null, 2)}</pre>
    </div>
  );
}
