import { Application } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { generateResponse } from './generateResponse.ts';

const app = new Application();

app.use((ctx) => {
  const params = ctx.request.url.searchParams;
  const n = params.get('n');
  const response = generateResponse(n);

  ctx.response.body = JSON.stringify(response);
  ctx.response.headers.set(
    'Access-Control-Allow-Origin',
    'http://localhost:3000'
  );
});

await app.listen({ port: 8080 });
