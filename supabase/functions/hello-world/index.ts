import { Hono } from 'jsr:@hono/hono';

const app = new Hono();

app.post('/hello-world', async (c) => {
  const { name } = await c.req.json();
  return new Response(`Hello ${name}!`)
});

app.get('/hello-world', (c) => {
  return new Response('Hello World!')
});
// on main branch
Deno.serve(app.fetch);