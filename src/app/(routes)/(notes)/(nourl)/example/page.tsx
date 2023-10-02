// Com () em VOLTA do NOME de uma PASTA, ela NÃO será ROTEADA !!!
// ------------------------------------------------------------------
// Nesse caso, essa URL vai ser Acessada em "/example", ao invés de
// "/nourl/example" !!!

export default function Example() {
  return (
    <div>
      <h3>Exemplo de Rota SEM Roteamento na PASTA !</h3>
    </div>
  );
}
