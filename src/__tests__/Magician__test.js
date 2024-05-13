import Character from '../js/Character';
import Magician from '../js/Magician'

describe('Magician', () => {
	const instance = new Magician('char');

	test('is instance of Character', ()=>{
		expect(instance).toBeInstanceOf(Character);
	});
	
	test ('test properties of created instance', ()=>{
		const expected = {
			name: 'char',
			type: "Magician",
			health: 100,
			level: 1,
			attack: 10,
			defence: 40
		}
		Object.entries(expected).forEach(item => expect(instance).toHaveProperty(...item))
	});

});

describe('inheritance methods', () => {
	const damagedChar = new Magician('Magician', 'Magician');
	damagedChar.damage(100);

	const levelUppedChar = new Magician('Magician', 'Magician');
	levelUppedChar.levelUp();

	const damagedCharLevelUp = new Magician('Magician', 'Magician');
	damagedCharLevelUp.damage(100);
	damagedCharLevelUp.levelUp();

	const deadCharLevelup = () => {
		const char = new Magician('Magician', 'Magician');
		char.damage(1000000);
		char.levelUp();
	};
	const hitDeadChar = () => {
		const char = new Magician('Magician', 'Magician');
		char.damage(1000000);
		char.damage(1000000);
	}

	test.each([
		[damagedChar, ['health', 40]],
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