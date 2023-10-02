// A diferença do "template" pro "layout" é que o Template RECARREGA o Componente SEMPRE, ao
// contrário do Layout que é FIXO, isso é bom para Animações e etc...

import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Template aplicado !</h1>
      {children}
    </div>
  );
}
