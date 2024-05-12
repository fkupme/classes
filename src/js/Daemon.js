import Character from "./Character";
class Daemon extends Character{
	constructor(name, type = "Daemon"){
		super(name, type)
	}
}

console.log(new Daemon('daemon'));