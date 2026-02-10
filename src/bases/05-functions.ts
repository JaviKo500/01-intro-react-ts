function greet(name: string): string {
  return `Hello ${name}!`;
}

const arrowFunGreet = (name: string): string => {
  return `Hello ${name}!`;
}

const message = greet('Javier');
const message2 = arrowFunGreet('Amy');

console.log('<--------------- JK 05-functions --------------->');
console.log(message);
console.log(message2);

function getUser() {
  return {
    name: 'Amy',
    username: 'amy500',
  }
}

const user = getUser();

const getUserArrowFun = () => {
  return {
    name: 'Amy',
    username: 'amy500',
  }
}

const user2 = getUserArrowFun();
console.log('<--------------- JK 05-functions --------------->');
console.log(user);
console.log(user2);
