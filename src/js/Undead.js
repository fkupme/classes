import Character from "./Character";
class Undead extends Character{
	constructor(name, type = "Undead"){
		super(name, type)
	}
}

console.log(new Undead('undead'));