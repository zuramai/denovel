import { Client } from "https://deno.land/x/mysql/mod.ts";

export async function connectMysql(Mysql: any): Promise<any>{

   const client = await new Client().connect({
     hostname: Mysql.hostname,
     username: Mysql.username,
     db: Mysql.db,
     password: Mysql.password,
     port: Mysql.port,
   });

   let db = await client;
   
   return db;

}
