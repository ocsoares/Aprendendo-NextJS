// Quando ALGUM Componente DEMORA a Carregar, por padrão, a Página INTEIRA ESPERA esse
// Componente carregar para ela TAMBÉM ser Carregada, o "Suspense API" faz com que algo
// APAREÇA no LUGAR desse Componente que está Carregando, o que PERMITE a Página ser
// Carregada sem ESPERAR esse Componente, e depois que esse Componente é Carregado, a
// "Suspense API" some e o Componente em si Aparece !!!!

import { Suspense } from "react";
import { SlowMyRepos } from "./components/SlowMyRepos";
import { SlowCEP } from "./components/SlowCEP";

export default async function SuspenseNextJSApi() {
  return (
    <div>
      <h2>API Suspense do NextJS/ReactJS !</h2>
      <Suspense fallback={<h3>Carregando meu SlowCEP !</h3>}>
        <SlowCEP />
      </Suspense>

      <Suspense fallback={<h3>Carregando meu SlowMyRepos !!</h3>}>
        <SlowMyRepos />
      </Suspense>
    </div>
  );
}
