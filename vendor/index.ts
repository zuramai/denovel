import app from "./package/denovel/_routing.ts";
import { PORT } from  "../config/app.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */
 
export async function __server__(): Promise<void>{

    await app.listen({ port: PORT.args || PORT.env || PORT.default }) 

}