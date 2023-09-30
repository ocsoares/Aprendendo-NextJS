// Esse Layout é Aplicado em TODAS as ROTAS !!!

import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h3>Root Layout aplicado !</h3>
      {children}
    </div>
  );
}
