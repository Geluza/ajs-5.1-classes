import Magician from '../Magician';

test('проверка персонажа Magician', () => {
  const expectedMagician = {
    name: 'Irina', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Magician('Irina', 'Magician');
  expect(received).toEqual(expectedMagician);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Magician(123, 'Magician')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Magician('A', 'Magician')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Magician('Alexandrovich', 'Magician')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Magician('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
