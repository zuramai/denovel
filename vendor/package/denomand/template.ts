/**
 * Template for Controller
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function template(name: string): string{

    return `import Controller from './Controller.ts';
import db from '../../vendor/package/denovel/_database.ts';

export class Home extends Controller {

    /**
     * Set the output of index function
     * @param {any || void}
     * @return {any || void} abstract of index function
     */

    index(){
        return 'index';
    }

    /**
     * Get the input of get function
     * @param {any || void}
     * @return {any || void} abstract of get function
     */

    async get(ctx: any){

    }  

    /**
     * Post the input of post function
     * @param {any || void}
     * @return {any || void} abstract of post function
     */

    async post(ctx: any){
        const value = ctx.body.value.get("eoe");
        ctx.response.body = "Hasil :" + value;
        ctx.response.status = 200;
    }  

    /**
     * Put the input of put function
     * @param {any || void}
     * @return {any || void} abstract of put function
     */

    async put(ctx: any){

    }  

    /**
     * Delete the input of delete function
     * @param {any || void}
     * @return {any || void} abstract of delete function
     */

    async delete(ctx: any){

    }  
}`;

}
