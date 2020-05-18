import { Mongo,Postgres,Mysql } from "../../../config/database.ts";
import { connectMongo } from "./drivers/index.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export const database = await connectMongo(Mongo);