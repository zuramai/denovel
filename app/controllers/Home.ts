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
        return ctx.response.body = output;
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

    async post({request,response}: any){
        const body = await request.body();
        const value = body.value.get("example");
        const denovel = database.collection("denovel");
        const data = await denovel.insertOne({
          example: value
        });

        const datas = await denovel.find({ example: { $ne: null } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/index.ejs`, { datas });
        response.body = output;
    }  

    /**
     * Edit the input of edit function
     * @param {any || void}
     * @return {any || void} abstract of edit function
     */

    async edit({request,response,params}: any){
        const denovel = database.collection("denovel");
        const datas = await denovel.findOne({ _id: { "$oid": params.id } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/edit.ejs`, { datas });
        response.body = output;        
    }  

    /**
     * Put the input of put function
     * @param {any || void}
     * @return {any || void} abstract of put function
     */

    async put({request,response,params}: any){
        const body = await request.body();
        const value = body.value.get("example");
        const denovel = database.collection("denovel");
        const { matchedCount, modifiedCount, upsertedId } = await denovel.updateOne(
          { _id: { "$oid": params.id } },
          { $set: { example: value } }
        );

        response.body = {
            success: true,
            message: "Data updated succesfully!",
            data: params.id,
        }
    }  

    /**
     * Delete the input of delete function
     * @param {any || void}
     * @return {any || void} abstract of delete function
     */

    async delete({request,response,params}: any){
        const denovel = database.collection("denovel");   
        await denovel.deleteOne({ _id: { "$oid": params.id} });

        response.body = {
            success: true,
            message: "Data deleted succesfully!",
            data: params.id,
        }
    }  
}