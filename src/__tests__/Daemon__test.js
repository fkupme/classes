import Character from '../js/Character';
import Daemon from '../js/Daemon'

describe('Daemon', () => {
	const instance = new Daemon('char')

	test('is instance of Character', ()=>{
		expect(instance).toBeInstanceOf(Character);
	});
	
	test ('test properties of created instance', ()=>{
		const expected = {
			name: 'char',
			type: "Daemon",
			health: 100,
			level: 1,
			attack: 10,
			defence: 40
		}
		Object.entries(expected).forEach(item => expect(instance).toHaveProperty(...item))
	});

});

describe('inheritance methods', () => {
	const damagedChar = new Daemon('Daemon', 'Daemon');
	damagedChar.damage(100);

	const levelUppedChar = new Daemon('Daemon', 'Daemon');
	levelUppedChar.levelUp();

	const damagedCharLevelUp = new Daemon('Daemon', 'Daemon');
	damagedCharLevelUp.damage(100);
	damagedCharLevelUp.levelUp();

	const deadCharLevelup = () => {
		const char = new Daemon('Daemon', 'Daemon');
		char.damage(1000000);
		char.levelUp();
	};
	const hitDeadChar = () => {
		const char = new Daemon('Daemon', 'Daemon');
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