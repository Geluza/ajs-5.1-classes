import Daemon from '../Daemon';

test('проверка персонажа Daemon', () => {
  const expectedDaemon = {
    name: 'Di', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Daemon('Di', 'Daemon');
  expect(received).toEqual(expectedDaemon);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Daemon(123, 'Daemon')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Daemon('A', 'Daemon')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Daemon('Alexandrovich', 'Daemon')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Daemon('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
