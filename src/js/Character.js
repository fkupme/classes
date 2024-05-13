export default class Character {

	static typesObject = { 'Bowman': '25/25', 'Swordsman': '40/10', 'Magician': '10/40', 'Daemon': '10/40', 'Undead': '25/25', 'Zombie': '40/10' };

	constructor(name, type) {
		if (typeof(name) !== 'string' || name.length < 2 || name.length > 10) {
			throw new Error('invalid character name');
		}
		this.name = name;

		if (!Object.keys(Character.typesObject).includes(type) || typeof(type) !== 'string') {
			throw new Error('invalid character type');
		}
		this.type = type;

		this.health = 100;
		this.level = 1;
	};

	levelUp(){
		if(!this.attack || !this.defence){
			return;
		};
		if(this.health === 0){
			throw new Error('нельзя повысить левел умершего');
		};
		this.level++;
		this.attack *= 1.2;
		this.defence *= 1.2;
		this.health = 100;;
	};

	damage(points){
		if(!this.attack || !this.defence){
			return;
		};
		if (this.health === 0) {
			throw new Error('то что мертво умереть не может');
		};
		this.health -= points * (1 - this.defence / 100);

		if (this.health<0){
			this.health = 0
		};
	}
}