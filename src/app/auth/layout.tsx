// Layout APENAS para as Rotas de Auth !!!

import { Metadata } from "next";
import { PropsWithChildren } from "react";

// Header APENAS para minhas Rotas de AUTH !!!
export const metadata: Metadata = {
  title: "AUTH Header",
  description: "Header de minhas Rotas de Auth !",
};

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h3>AUTH Layout aplicado !</h3>
      {children}
    </div>
  );
}
