const ironMan = {
  firstName: 'Tony',
  lastName: 'Gutierrez',
  age: 45,
  address: {
    street: '123 Fake St',
    city: 'San Francisco',
  }
};

// const spiderMan  = { ...ironMan };
const spiderMan  = structuredClone(ironMan);
spiderMan.firstName = 'Peter';
spiderMan.lastName = 'Parker';
spiderMan.address.city = 'New York';
console.log('<--------------- JK 03-object-literal --------------->');
console.log(ironMan, spiderMan);