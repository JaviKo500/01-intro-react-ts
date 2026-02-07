interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
};

interface Address {
  postalCode: number;
  street: string;
  city?: string;
};

const ironMan: Person = {
  firstName: 'Tony',
  lastName: 'Gutierrez',
  age: 40,
  address: {
    postalCode: 94087,
    street: '123 Fake St',
    city: 'San Francisco',
  }
};

// const spiderMan  = { ...ironMan };
const spiderMan  = structuredClone(ironMan);
spiderMan.firstName = 'Peter';
spiderMan.lastName = 'Parker';

const drDoom: Person = {
  firstName: 'Victor',
  lastName: 'Von Doom',
  age: 45,
}
console.log('<--------------- JK 03-object-literal --------------->');
console.log(ironMan, spiderMan, drDoom);