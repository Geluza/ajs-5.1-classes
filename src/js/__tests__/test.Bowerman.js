import Bowerman from '../Bowerman';

test('проверка персонажа Bowerman', () => {
  const expectedBowerman = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Bowerman('Alex', 'Bowman');
  expect(received).toEqual(expectedBowerman);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Bowerman(123, 'Bowman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Bowerman('A', 'Bowman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Bowerman('Alexandrovich', 'Bowman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Bowerman('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
