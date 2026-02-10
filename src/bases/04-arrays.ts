const myArrayInit: number[] = [];
const myArray: number[] = [1, 2, 3, 4, 5];
myArray.push(6);

const myArray2 = [...myArray];
myArray2.push(7);

console.log('<--------------- JK 04-arrays --------------->');
console.log(myArrayInit);
console.log(myArray);
console.log(myArray2);