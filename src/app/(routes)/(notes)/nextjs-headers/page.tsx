import { cookies, headers } from "next/headers";

export default function NextJSHeaders() {
  const nextCookies = cookies();
  const nextHeaders = headers();

  return (
    <div>
      <h2>Usando os Headers PRÓPRIOS do NextJS !</h2>

      <h3>Cookies</h3>
      {JSON.stringify(nextCookies.getAll(), null, 2)}

      <h3>Headers</h3>
      {JSON.stringify(nextHeaders.entries(), null, 2)}
    </div>
  );
}
