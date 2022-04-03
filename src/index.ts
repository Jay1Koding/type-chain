interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'jay',
  age: 29,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `hello ${person.name} you are ${person.age} ${person.gender}!`;
};

console.log(sayHi(person));

export {};
