import Character from "./Character";
class Swordsman extends Character{
	constructor(name, type = "Swordsman"){
		super(name, type);
	}
}

console.log(new Swordsman('swordsman'));