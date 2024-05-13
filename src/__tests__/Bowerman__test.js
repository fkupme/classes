import Character from '../js/Character';
import Bowerman from '../js/Bowerman'

describe('Bowerman', () => {
	const instance = new Bowerman('char')

	test('is instance of Character', ()=>{
		expect(instance).toBeInstanceOf(Character);
	});
	
	test ('test properties of created instance', ()=>{
		const expected = {
			name: 'char',
			type: "Bowman",
			health: 100,
			level: 1,
			attack: 25,
			defence: 25
		}
		Object.entries(expected).forEach(item => expect(instance).toHaveProperty(...item))
	});
});

describe('inheritance methods', () => {
	const damagedChar = new Bowerman('Bowman', 'Bowman');
	damagedChar.damage(100);

	const levelUppedChar = new Bowerman('Bowman', 'Bowman');
	levelUppedChar.levelUp();

	const damagedCharLevelUp = new Bowerman('Bowman', 'Bowman');
	damagedCharLevelUp.damage(100);
	damagedCharLevelUp.levelUp();

	const deadCharLevelup = () => {
		const char = new Bowerman('Bowman', 'Bowman');
		char.damage(1000000);
		char.levelUp();
	};
	const hitDeadChar = () => {
		const char = new Bowerman('Bowman', 'Bowman');
		char.damage(1000000);
		char.damage(1000000);
	}

	test.each([
		[damagedChar, ['health', 25]],
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