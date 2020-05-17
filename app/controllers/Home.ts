import Controller from './Controller.ts';

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

    get(ctx: any){

    }  

    /**
     * Post the input of post function
     * @param {any || void}
     * @return {any || void} abstract of post function
     */

    post(ctx: any){
        const value = ctx.body.value.get("eoe");
        ctx.response.body = "Hasil :" + value;
        ctx.response.status = 200;
    }  

    /**
     * Put the input of put function
     * @param {any || void}
     * @return {any || void} abstract of put function
     */

    put(ctx: any){

    }  

    /**
     * Delete the input of delete function
     * @param {any || void}
     * @return {any || void} abstract of delete function
     */

    delete(ctx: any){

    }  
}