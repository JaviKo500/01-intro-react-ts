export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// type Owner = 'DC' | 'Marvel';
enum Owner {
  DC = 'DC',
  Marvel = 'Marvel',
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spider-man',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Iron Man',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  }
];