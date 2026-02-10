function greet(name: string): string {
  return `Hello ${name}!`;
}

const arrowFunGreet = (name: string): string => `Hello ${name}!`;

const message = greet('Javier');
const message2 = arrowFunGreet('Amy');

console.log('<--------------- JK 05-functions --------------->');
console.log(message);
console.log(message2);

interface User {
  name: string;
  username: string;
}

function getUser(): User {
  return {
    name: 'Amy',
    username: 'amy500',
  }
}

const user = getUser();

const getUserArrowFun = (): User => ({
  name: 'Amy',
  username: 'amy500',
});

const user2 = getUserArrowFun();
console.log('<--------------- JK 05-functions --------------->');
console.log(user);
console.log(user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((num: number) => console.log(num));