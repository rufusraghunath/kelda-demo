import { Application } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { generateResponse } from './generateResponse.ts';

const app = new Application();

app.use((ctx) => {
  const params = ctx.request.url.searchParams;
  const name = params.get('name');
  const n = params.get('n');
  const response = generateResponse(name, n);

  ctx.response.body = JSON.stringify(response);
});

await app.listen({ port: 8080 });
