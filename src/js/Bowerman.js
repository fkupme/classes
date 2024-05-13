import Character from "./Character";
export default class Bowerman extends Character {
	constructor(name, type = "Bowman"){
		super(name, type);
		this.setAttackAndDefence();
	}
	setAttackAndDefence(){
		const stats = Bowerman.typesObject.Bowman.split('/');
		this.attack = +stats[0];
		this.defence = +stats[1];
	}
};