import Character from '../js/Character';
import Swordsman from '../js/Swordsman'

describe('Swordsman', () => {
	const instance = new Swordsman('char')

	test('is instance of Character', ()=>{
		expect(instance).toBeInstanceOf(Character);
	});
	
	test ('test properties of created instance', ()=>{
		const expected = {
			name: 'char',
			type: "Swordsman",
			health: 100,
			level: 1,
			attack: 40,
			defence: 10
		}
		Object.entries(expected).forEach(item => expect(instance).toHaveProperty(...item))
	});

});

describe('inheritance methods', () => {
	const damagedChar = new Swordsman('Swordsman', 'Swordsman');
	damagedChar.damage(100);

	const levelUppedChar = new Swordsman('Swordsman', 'Swordsman');
	levelUppedChar.levelUp();

	const damagedCharLevelUp = new Swordsman('Swordsman', 'Swordsman');
	damagedCharLevelUp.damage(100);
	damagedCharLevelUp.levelUp();

	const deadCharLevelup = () => {
		const char = new Swordsman('Swordsman', 'Swordsman');
		char.damage(1000000);
		char.levelUp();
	};
	const hitDeadChar = () => {
		const char = new Swordsman('Swordsman', 'Swordsman');
		char.damage(1000000);
		char.damage(1000000);
	}

	test.each([
		[damagedChar, ['health', 10]],
		[levelUppedChar, ['level', 2]],
		[damagedCharLevelUp, ['level', 2]],
		[damagedCharLevelUp, ['health', 100]],
	])('testing methods', (char, prop) => {
		expect(char).toHaveProperty(...prop)
	});

	test('testing error from levelup dead char', () => {
		expect(deadCharLevelup).toThrow('нельзя повысить левел умершего');
	})
	test('testing error from hitting dead char', () => {
		expect(hitDeadChar).toThrow('то что мертво умереть не может');
	})
})