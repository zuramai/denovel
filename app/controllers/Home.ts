import Controller from './Controller.ts';
import { database } from '../../vendor/package/denovel/_database.ts';
import * as dejs from 'https://deno.land/x/dejs@0.6.0/mod.ts';

export class Home extends Controller {

    /**
     * Set the output of index function
     * @param {any || void}
     * @return {any || void} abstract of index function
     */

    async index(ctx: any){
        const denovel = database.collection("denovel");
        const datas = await denovel.find({ example: { $ne: null } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/index.ejs`, { datas });
        ctx.response.body = output;
    }

    /**
     * Get the input of get function
     * @param {any || void}
     * @return {any || void} abstract of get function
     */

    async get(ctx: any){
        const denovel = database.collection("denovel");
        const datas = await denovel.find({ example: { $ne: null } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/index.ejs`, { datas });       
        ctx.response.body = output;
    }  

    /**
     * Post the input of post function
     * @param {any || void}
     * @return {any || void} abstract of post function
     */

    async post(ctx: any){
        const value = ctx.body.value.get("example");
        const denovel = database.collection("denovel");
        const data = await denovel.insertOne({
          example: value
        });
        console.log('Data added successfully');

        const datas = await denovel.find({ example: { $ne: null } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/index.ejs`, { datas });
        ctx.response.body = output;
    }  

    /**
     * Edit the input of edit function
     * @param {any || void}
     * @return {any || void} abstract of edit function
     */

    async edit(ctx: any){

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
}