const person = {
  name: 'Amy',
  age: 30,
  key: 'amy500',
}
const { name, age, key } = person;

console.log('<--------------- JK 06-obj-destructuring --------------->');
console.log({name, age, key});

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

// const useContext = ({ name, age, key, rank }: Hero) => {
// * max parameters limit are 3 in clean code
const useContext = (hero: Hero) => {
  const { name, age, key, rank } = hero;
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
    greet: () => `Hello ${name}!`,
  }
}

const { rank = 'empty', keyName, user, greet } = useContext(person);
const {age: ageHero, name: nameHero} = user;
console.log({rank, keyName, ageHero, nameHero,});
console.log(greet());