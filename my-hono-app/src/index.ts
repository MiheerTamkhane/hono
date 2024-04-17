import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});

// app.post("/", async (c) => {
//   console.log("auth : ", c.req.header("Authorization"));
//   console.log("auth : ", c.req.query("param"));
//   return c.text("hello Hono!");
// });

export default app;
