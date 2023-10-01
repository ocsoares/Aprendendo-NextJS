// Isso torna o Componente ASSÍNCRONO, permitindo por exemplo, chamar o BANCO de DADOS !!
// OBS: Isso NÃO era possível no ReactJS
// ------------------------------------------------------------------------------------------
// As Requisições vão ser feitas no Lado do SERVIDOR (Por padrão no NextJS todos os Componentes são !!!)
// -------------------------------------------------------------------------------------------------------
// ATENÇÃO: Dessa forma, o Componente vai ser ESTÁTICO, ou seja, os Dados HTTP vão ser FIXOS !!!

import { MyRepos } from "./components/MyRepos";

// Com isso, a cada 30 SEGUNDOS a Página INTEIRA vai RECARREGAR e fará outra REQUISIÇÃO HTTP e
// atualizará os Dados !!!
// ---------------------------
// export const revalidate = 30;

export default async function HTTPRequest() {
  // Com o "revalidate" dessa maneira, vai RECARREGAR APENAS a REQUISIÇÃO HTTP, e NÃO a Página Inteira !!!
  const response = await fetch("https://viacep.com.br/ws/30110008/json/", {
    next: { revalidate: 30 },

    // "force-cache" é a Opção PADRÃO de Cache do Next.js, ou seja, na PRIMEIRA Requisição feita, será
    // cacheado e os Outros Usuários USARÃO esse CACHE !!!
    // --------------------------------------------------------
    // Se quiser que CADA Usuário faça uma REQUISIÇÃO DIFERENTE na API, usar "no-store" !!!
    // --------------------------------------------------------------------------------------
    // cache: "force-cache",
  });
  const cep = await response.json();

  return (
    <div>
      <h2>Fazendo Requisições HTTP no Próprio COMPONENTE !</h2>
      {/* Tag "<pre>" = Mantém a FORMATAÇÃO ORIGINAL do Texto, sem o HTML Aplicar Modificações... */}
      {/* -------------------------------------------------------------------------------------------- */}
      {/* null, 2 = Para aplicar a QUEBRA DE LINHA no JSON !!! */}
      <pre>{JSON.stringify(cep, null, 2)}</pre>
      <MyRepos />
    </div>
  );
}
