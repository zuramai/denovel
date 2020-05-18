/**
 * Main Controller
 * @param {any || void}
 * @return {any || void} abstract of index function
 */

export default abstract class Controller {
	abstract index(ctx: any): any | void;
	abstract get(ctx: any): any | void;
	abstract post(ctx: any): any | void;
	abstract edit(ctx: any): any | void;
	abstract put(ctx: any): any | void;
	abstract delete(ctx: any): any | void;
}