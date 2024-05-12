import Character from "../js/Character";


describe('Character methods', () => {
	const damagedChar = new Character('Undead', 'Undead');
	damagedChar.damage(100);

	const levelUppedChar = new Character('Undead', 'Undead');
	levelUppedChar.levelUp();

	const damagedCharLevelUp = new Character('Undead', 'Undead');
	damagedCharLevelUp.damage(100);
	damagedCharLevelUp.levelUp();

	const deadCharLevelup = () => {
		const char = new Character('Undead', 'Undead');
		char.damage(1000000);
		char.levelUp();
	};
	const hitDeadChar = () =>{
		const char = new Character('Undead', 'Undead');
		char.damage(1000000);
		char.damage(1000000);
	}

	test.each([
		[damagedChar, ['health', 25]],
		[levelUppedChar, ['level', 2]],
		[damagedCharLevelUp, ['level', 2]],
		[damagedCharLevelUp, ['health', 100]],
	])('testing methods', (char, prop)=>{
		expect(char).toHaveProperty(...prop)
	});

	test.each([deadCharLevelup, hitDeadChar])('test errors', (char)=>{
		expect(char).toThrow();
	});
})