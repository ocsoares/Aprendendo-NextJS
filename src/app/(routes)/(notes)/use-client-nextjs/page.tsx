// Qualquer Página/Componente que PRECISE da Interação do Usuário, como os
// Hooks do React, ou Bibliotecas que usam API do Browser, por exemplo, usar
// "use client" no COMEÇO do Arquivo !!!
// ------------------------------------------------------------------------------
// OBS: Usando "use client" a Função NÃO pode ser ASSÍNCRONA !!!

// ATENÇÃO: Também PODE usar o "use client" APENAS DENTRO de um Componente, para NÃO
// tornar a Página Inteira Server Client (FORA do Servidor) !!!

"use client";

import { useState } from "react";

export default function UseClientNextJS() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((oldCount) => oldCount + 1);
    console.log("COUNT:", count);
  };

  return (
    <div>
      <h2>Use Client do NextJS !</h2>

      <p>CLICADO: {count}</p>
      <button onClick={handleOnClick}>Incrementar</button>
    </div>
  );
}
