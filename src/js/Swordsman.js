import Character from "./Character";
export default class Swordsman extends Character{
	constructor(name, type = "Swordsman"){
		super(name, type);
		this.setAttackAndDefence();
	}

	setAttackAndDefence(){
		const stats = Swordsman.typesObject.Swordsman.split('/');
		this.attack = +stats[0];
		this.defence = +stats[1];
	}
}
