// TIRAR ESSA REGRA DEPOIS !!
/* eslint-disable @typescript-eslint/no-unused-vars */

// EXEMPLO do Próprio NextJS !!!

export async function GET(request: Request) {}

// Context (OPTIONAL) !!!
// export async function GET(request, context: { params }) {
//   const { team } = params; // '1'
// }

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
