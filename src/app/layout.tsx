// Esse Layout é Aplicado em TODAS as ROTAS !!!

import { PropsWithChildren } from "react";
import { Metadata } from "next";

// Header do HTML !!!
// ATENÇÃO: Colocar o NOME EXATAMENTE como "metadata" !!!!
// ---------------------------
// Pelo o que eu PERCEBI, PODE usar isso em QUALQUER Página, mas
// acho que é melhor usar em Layout !!!
export const metadata: Metadata = {
  title: "Header INICIAL",
  description: "Esse é apenas o Header inicial do meu projeto NextJS",
  // mais configs...
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h3>Root Layout aplicado !</h3>
      {children}
    </div>
  );
}
