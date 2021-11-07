import Undead from '../Undead';

test('проверка персонажа Undead', () => {
  const expectedUndead = {
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Undead('Vasya', 'Undead');
  expect(received).toEqual(expectedUndead);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Undead(123, 'Undead')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Undead('A', 'Undead')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Undead('Alexandrovich', 'Undead')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Undead('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
