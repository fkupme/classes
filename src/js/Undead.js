import Character from "./Character";
export default class Undead extends Character{
	constructor(name, type = "Undead"){
		super(name, type)
		this.setAttackAndDefence();
	}

	setAttackAndDefence(){
		const stats = Undead.typesObject.Undead.split('/');
		this.attack = +stats[0];
		this.defence = +stats[1];
	}
}
