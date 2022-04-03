const name = 'jay',
  age = 29,
  gender = 'male';

const sayHi = (name: string, age: number, gender?: string) => {
  console.log(`hello ${name} you are ${age} ${gender}`);
};

sayHi(name, age);

export {};
