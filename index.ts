import { UserInterface } from './vendor/index.ts';

class User implements UserInterface {
	getUser(name: string){
		return name;
	}
}

const user = new User().getUser("Fauzan")

console.log(user)