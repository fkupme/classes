import Character from "./Character";
class Bowerman extends Character {
	constructor(name, type = "Bowman"){
		super(name, type);
	}
};
console.log(Bowerman);
console.log(new Bowerman('owerman'));