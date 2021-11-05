import Bowerman from '../Bowerman';

test('проверка персонажа Bowerman', () => {
  const expectedBowerman = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Bowerman('Alex', 'Bowman');
  expect(received).toEqual(expectedBowerman);
});
