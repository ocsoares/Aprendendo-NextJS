export async function SlowCEP() {
  // Espera 5 SEGUNDOS ANTES de EXECUTAR o Componente !!!
  // OBS: Por ALGUM MOTIVO, se colocar Muitos segundos DÁ ERRO (???) !!!!
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("https://viacep.com.br/ws/01002000/json/", {
    next: { revalidate: 86400 },
  });

  const cep = await response.json();

  return (
    <div>
      <h2>Slow CEP !</h2>
      <pre>{JSON.stringify(cep, null, 2)}</pre>
    </div>
  );
}
