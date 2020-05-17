import { parse } from "https://deno.land/std/flags/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

/* init args */
const { args } = Deno;

/*
|--------------------------------------------------------------------------
| Args
|--------------------------------------------------------------------------
|
| This value is from the command line
|
*/
const Args = parse(args);

/* export port */
export const PORT = {
    args: Args.port || Args.p, 
    env: parseInt(config().PORT),
    default: 8000,
}
