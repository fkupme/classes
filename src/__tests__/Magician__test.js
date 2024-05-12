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

	
	test('test inheritance damage method', ()=>{
		instance.damage(100)
		expect(instance.health).toBe(40);
	});

	test('test inheritance levelUp method', ()=>{
		instance.levelUp();
		expect(instance.level).toBe(2);
	});

});