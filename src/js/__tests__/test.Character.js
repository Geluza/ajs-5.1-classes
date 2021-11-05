import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Daemon from '../Daemon';
import Zombie from '../Zombie';
import Undead from '../Undead';
import Magician from '../Magician';

test('проверка персонажа Bowerman', () => {
  const expectedBowerman = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Bowerman('Alex', 'Bowman');
  expect(received).toEqual(expectedBowerman);
});

test('проверка персонажа Swordsman', () => {
  const expectedSwordsman = {
    name: 'Oleg', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Swordsman('Oleg', 'Swordsman');
  expect(received).toEqual(expectedSwordsman);
});

test('проверка персонажа Daemon', () => {
  const expectedDaemon = {
    name: 'Di', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Daemon('Di', 'Daemon');
  expect(received).toEqual(expectedDaemon);
});

test('проверка персонажа Zombie', () => {
  const expectedZombie = {
    name: 'Svyatoslav', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Zombie('Svyatoslav', 'Zombie');
  expect(received).toEqual(expectedZombie);
});

test('проверка персонажа Undead', () => {
  const expectedUndead = {
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Undead('Vasya', 'Undead');
  expect(received).toEqual(expectedUndead);
});

test('проверка персонажа Magician', () => {
  const expectedMagician = {
    name: 'Irina', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Magician('Irina', 'Magician');
  expect(received).toEqual(expectedMagician);
});
