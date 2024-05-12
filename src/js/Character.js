export default class Character {
	static #checkName(name) {
		if (!typeof (name) === 'string' || name.length < 2 || name.length > 10) {
			throw new Error('invalid character name');
		}
	};

	static #typesObject = { 'Bowman': '25/25', 'Swordsman': '40/10', 'Magician': '10/40', 'Daemon': '25/25', 'Undead': '40/10', 'Zombie': '10/40' }

	static #checkType(type) {
		if (!Object.keys(this.#typesObject).includes(type) || !typeof (type) === 'string') {
			throw new Error('invalid character type');
		}
	}

	static #setAttackAndDefence(type) {
		const statsArray = this.#typesObject[type].split('/');
		this.attack = statsArray[0];
		this.defence = statsArray[1];
		console.log(statsArray, this.attack, this.defence);
	};

	constructor(name, type) {
		Character.#checkName(name);
		this.name = name;
		Character.#checkType(type);
		this.type = type;
		this.health = 100;
		this.level = 1;
		Character.#setAttackAndDefence(type);
		this.attack = +this.constructor.attack;
		this.defence = +this.constructor.defence;
		this.levelUp();
		this.damage(120)
	};

	levelUp(){
		if(this.health === 0){
			throw new Error('нельзя повысить левел умершего');
		}
		this.level++;
		this.attack *= 1.2
		this.defence *= 1.2
		this.health = 100;
	};

	damage(points){
		if (this.health === 0) {
			return;
		}
		this.health -= points * (1 - this.defence / 100)
	}
}

console.log(new Character('qqwe', 'Magician'));