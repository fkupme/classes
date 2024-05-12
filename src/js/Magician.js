import Character from "./Character";
class Magician extends Character{
	constructor(name, type = "Magician"){
		super(name, type);
	}
}
console.log(new Magician('magician'));