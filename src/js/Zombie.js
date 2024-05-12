import Character from "./Character";
class Zombie extends Character{
	constructor(name, type = "Zombie"){
		super(name, type)
	}
}

console.log(new Zombie('zombie'));