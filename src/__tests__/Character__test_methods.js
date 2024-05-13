import Character from "../js/Character";
const char = new Character('Undead', 'Undead');
test('return', () => {
	char.levelUp()
	expect(char.level).toBe(1);
}) 

test('return', () => {
	char.damage(50)
	expect(char.health).toBe(100);
})
