import { type Hero, heroes } from '../data/heroes.data';

const getHeroById = (id: number): Hero => {
  const hero = heroes.find((hero) => hero.id === id);
  if ( !hero ) {
    throw new Error(`Hero not found with id: ${id}`);
  }
  return hero;
};


console.log('<--------------- JK 08-imports-exports --------------->');
console.log(getHeroById(5));
console.log(getHeroById(1));
console.log(getHeroById(100) ?? 'Not found');