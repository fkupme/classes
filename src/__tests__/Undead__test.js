import Character from '../js/Character';
import Undead from '../js/Undead'

describe('Undead', () => {
	const instance = new Undead('char')

	test('is instance of Character', ()=>{
		expect(instance).toBeInstanceOf(Character);
	});

	test ('test properties of created instance', ()=>{
		const expected = {
			name: 'char',
			type: "Undead",
			health: 100,
			level: 1,
			attack: 25,
			defence: 25
		}
		Object.entries(expected).forEach(item => expect(instance).toHaveProperty(...item))
	});

	
	test('test inheritance damage method', ()=>{
		instance.damage(100)
		expect(instance.health).toBe(25);
	});

	test('test inheritance levelUp method', ()=>{
		instance.levelUp();
		expect(instance.level).toBe(2);
	});

	
});