/**
 * Template for Controller
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function template(name: string): string{

    return `import Controller from './Controller.ts';

export class ${name} extends Controller {
    
    /**
     * Set the output of index function
     * @param {any}
     * @return {any} abstract of index function
     */

    index(){
        return '<your filename>';
    }
}`;

}
