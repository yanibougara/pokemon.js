class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
    this.luck = luck
  }
  isLucky() {
    const random = Math.random();
    return random < this.luck;
  }
  attackPokemon(enemy) {
    if (this.isLucky()) {
      const damage = this.attack - enemy.defense;
      if (damage > 0) {
        enemy.hp -= damage;
        console.log(this.name + " attaque " + enemy.name + " et inflige " + damage + " dégâts.");
      }}}}
let pokemon1 = new Pokemon("Pikachu", 25, 10, 100, 0.8);
let pokemon2 = new Pokemon("Bulbasaur", 20, 15, 120, 0.7);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
  pokemon1.attackPokemon(pokemon2);
  console.log(pokemon2.name + " a " + pokemon2.hp + " points de vie restants");

  if (pokemon2.hp <= 0) {
    console.log(pokemon2.name + " est mort ");
    break;}

  pokemon2.attackPokemon(pokemon1);
  console.log(pokemon1.name + " a " + pokemon1.hp + " points de vie restants");

  if (pokemon1.hp <= 0) {
    console.log(pokemon1.name + " est mort ");
    break;
  }
}






