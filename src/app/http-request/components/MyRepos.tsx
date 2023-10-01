// Fazendo Requisições HTTP em COMPONENTES ASSÍNCRONOS !!!
// -----------------------------------------------------------
// Como é um COMPONENTE e NÃO uma Página, NÃO precisa usar "export default" !!!

export async function MyRepos() {
  const response = await fetch("https://api.github.com/users/ocsoares/repos", {
    next: { revalidate: 86400 }, // 1 day
  });

  const myRepos = await response.json();

  return (
    <div>
      <h2>My repos !</h2>
      <pre>{JSON.stringify(myRepos, null, 2)}</pre>
    </div>
  );
}
