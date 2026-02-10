const charactersName: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , , trunks ] = charactersName;
console.log('<--------------- JK 07-array-destructuring --------------->');
console.log({trunks});
console.log(charactersName.at(-1));

const returnArrayFn = () => {
  return [
    'Goku',
    123,
  ] as const;
}

const [ goku, age ] = returnArrayFn();
console.log(goku, age);


const useState = ( value: string ) => {
  return [
    value,
    (newValue: string) => console.log(newValue),
  ] as const;
}

const [ name, setName ] = useState('Amy');
console.log('<--------------- JK 07-array-destructuring --------------->');
console.log(name);
setName('Amy500');