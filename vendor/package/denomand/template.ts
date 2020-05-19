/**
 * Template for Controller
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function template(name: string): string{

return `import Controller from './Controller.ts';
import { database } from '../../vendor/package/denovel/_database.ts';
import * as dejs from 'https://deno.land/x/dejs@0.6.0/mod.ts';

export class ${name} extends Controller {

    /**
     * Set the output of index function
     * @param {any || void}
     * @return {any || void} abstract of index function
     */

    async index(ctx: any){

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

    async post({request,response}: any){

    }  

    /**
     * Edit the input of edit function
     * @param {any || void}
     * @return {any || void} abstract of edit function
     */

    async edit({request,response,params}: any){
     
    }  

    /**
     * Put the input of put function
     * @param {any || void}
     * @return {any || void} abstract of put function
     */

    async put({request,response,params}: any){

    }  

    /**
     * Delete the input of delete function
     * @param {any || void}
     * @return {any || void} abstract of delete function
     */

    async delete({request,response,params}: any){

    }  
    
}`;

}
