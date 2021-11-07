import Swordsman from '../Swordsman';

test('проверка персонажа Swordsman', () => {
  const expectedSwordsman = {
    name: 'Oleg', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Swordsman('Oleg', 'Swordsman');
  expect(received).toEqual(expectedSwordsman);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Swordsman(123, 'Swordsman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Swordsman('A', 'Swordsman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Swordsman('Alexandrovich', 'Swordsman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Swordsman('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
