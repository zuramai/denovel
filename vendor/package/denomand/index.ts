import args from "https://deno.land/x/args@1.0.7/wrapper.ts";
import {
  EarlyExitFlag,
  Option,
} from "https://deno.land/x/args@1.0.7/flag-types.ts";
import {
  Choice,
  Text,
} from "https://deno.land/x/args@1.0.7/value-types.ts";
import {
  PARSE_FAILURE,
} from "https://deno.land/x/args@1.0.7/symbols.ts";
import pascalCase from "https://deno.land/x/case/pascalCase.ts";
import template from "./template.ts"

/**
 * Denomand - A Deno Framework Artisan CLI
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export class Denomand {
  start(){
    const parser = args
      .describe("Denomand CLI")
      .with(
        EarlyExitFlag("help", {
          describe: "Show help",
          exit() {
            console.log(parser.help());
            return Deno.exit();
          },
        })
      )
      .with(
        Option("name", {
          type: Text,
          describe: "Adding Controller and Model as Service",
        })
      );

    const res = parser.parse(Deno.args);

    if (res.error) { 
      console.error("Failed to parse CLI arguments");
      console.error(res.error.toString());
      Deno.exit(1);
    } else {
      const { name } = res.value;

      (async () => {
        const encoder = new TextEncoder();
        const data = encoder.encode(template(pascalCase(name)));
        await Deno.writeFile(`app/controllers/${pascalCase(name)}.ts`, data);           
      })();

      console.log("Controller added successfully")
    }
  }
}