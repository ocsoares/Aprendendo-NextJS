// Layout APENAS para as Rotas de Auth !!!

import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h3>AUTH Layout aplicado !</h3>
      {children}
    </div>
  );
}
