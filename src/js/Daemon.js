import Character from "./Character";
export default class Daemon extends Character{
	constructor(name, type = "Daemon"){
		super(name, type)
		this.setAttackAndDefence();
	}
	setAttackAndDefence(){
		const stats = Daemon.typesObject.Daemon.split('/');
		this.attack = +stats[0];
		this.defence = +stats[1];
	}
}
