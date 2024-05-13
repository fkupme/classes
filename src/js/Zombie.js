import Character from "./Character";
export default class Zombie extends Character{
	constructor(name, type = "Zombie"){
		super(name, type)
		this.setAttackAndDefence();
	}

	setAttackAndDefence(){
		const stats = Zombie.typesObject.Zombie.split('/');
		this.attack = +stats[0];
		this.defence = +stats[1];
	}
}