import Character from "../js/Character";

const testArray = [
	[
		['Bowman', 'Bowman'],
		{
			name: 'Bowman',  
			type: "Bowman", 
			health: 100, 
			level: 1, 
			attack: 25, 
			defence: 25}
	],
	[
		['Swordsman', 'Swordsman'],
		{
			name: 'Swordsman',
			 type: "Swordsman", 
			 health: 100, 
			 level: 1, 
			 attack: 40, 
			 defence: 10
		}
	],
	[
		['Magician', 'Magician'],
		{
		name: 'Magician', 
		type: "Magician", 
		health: 100, 
		level: 1, 
		attack: 10, 
		defence: 40
	}
	],
	[
		['Daemon', 'Daemon'],
		{
			name: 'Daemon', 
			type: "Daemon", 
			health: 100, 
			level: 1, 
			attack: 10, 
			defence: 40
		}
	],
	[
		['Zombie', 'Zombie'],
		{
			name: 'Zombie',
			type: "Zombie",
			health: 100,
			level: 1,
			attack: 40,
			defence: 10,
		}
	],
	[
		['Undead', 'Undead'],
		{
			name: 'Undead',
			type: "Undead",
			health: 100,
			level: 1,
			attack: 25,
			defence: 25,
		}
	],
]

const errorArray = [
	[['', 'Undead'], 'invalid character name'],
	[['Zombie', 'Junior'], 'invalid character type'],
	[[213123123, 'Undead'], 'invalid character name'],
	[['undeadundead', 'Undead'], 'invalid character name'],
	[['undead', 123456], 'invalid character type']
]
describe('char creating', () => {

	test.each(testArray)('testin creating instances', (args, expected) => {
		const instance = new Character(...args)
		Object.entries(expected).forEach(item => expect(instance).toHaveProperty(...item))
	})

	test.each(testArray)('testin instanceof',(args) => {
		expect(new Character(...args)).toBeInstanceOf(Character);
	})

	test.each(errorArray)('test errors', (args, err)=>{
		const getError = () =>{
			new Character(...args)
		}
		expect(getError).toThrow(err);
	})
})
