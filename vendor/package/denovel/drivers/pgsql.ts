import { Client } from "https://deno.land/x/postgres/mod.ts";

export async function connectPgsql(Postgres: any) {
  const client = new Client({
    user: Postgres.host,
    database: Postgres.database,
    hostname: Postgres.host,
    port: Postgres.port
  });

  await client.connect();

  const result = await client.query("SELECT * FROM people;");

  console.log(result.rows);
  await client.end();
}
