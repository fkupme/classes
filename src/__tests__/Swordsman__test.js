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

	
	test('test inheritance damage method', ()=>{
		instance.damage(100)
		expect(instance.health).toBe(10);
	});

	test('test inheritance levelUp method', ()=>{
		instance.levelUp();
		expect(instance.level).toBe(2);
	});

});