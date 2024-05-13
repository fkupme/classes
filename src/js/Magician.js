import Character from "./Character";
export default class Magician extends Character{
	constructor(name, type = "Magician"){
		super(name, type);
		this.setAttackAndDefence();
	}
	setAttackAndDefence(){
		const stats = Magician.typesObject.Magician.split('/');
		this.attack = +stats[0];
		this.defence = +stats[1];
	}
}
