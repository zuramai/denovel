/**
 * Main Controller
 * @param {any || void}
 * @return {any || void} abstract of index function
 */

export default abstract class Controller {
	abstract index(ctx: any): any;
	abstract get(ctx: any): any;
	abstract post(ctx: any): any;
	abstract edit(ctx: any): any;
	abstract put(ctx: any): any;
	abstract delete(ctx: any): any;
}