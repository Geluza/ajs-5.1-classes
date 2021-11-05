export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
    }

    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
