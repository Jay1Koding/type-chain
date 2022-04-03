# type-chain

# SETUP

## 1) 타입스크립트 설치: npm i -g typescript

## 2) 타입스크립트 버전확인: tsc -v

### 3) tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2015", // 몇 버전으로
    "module": "commonjs",
    "sourceMap": true,
    "strict": true
  },
  "include": ["index.ts"], // 파일을 배열로 저장함
  "exclude": ["node_modules"] // 없어도 제외해주는 게 좋음
}
```

> tsc : ts를 js로 컴파일 해줌

### 4) package.json

```json
  "script": {
    "prestart": "tsc",
    "start": "node index.js"
  }

```

---

# First steps with Typescript

```javascript
const name = 'jay',
  age = 29,
  gender = 'male';

const sayHi = (name, age, gender?) => {
  // gender는 optional이 됨
  console.log(`hello ${name} you are ${age} ${gender}`);
};

sayHi(name, age);

export {}; // 빠가나면 이거 해줘야함
```

---

# Types in Typescript

```javascript
const name = 'jay',
  age = 29,
  gender = 'male';

const sayHi = (name: string, age: number, gender?: string): string => {
  return `hello ${name} you are ${age} ${gender}`;
};

console.log(sayHi(name, age));

export {};
```

🤬 every time i type 'npm start' ?????????????????????????

> npm i -g tsc-watch

```json
// package.json
"scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\" ",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

---

# Interfaces on Typescript

```javascript
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

// as 문법 선언
// const person = {name: "abc", age: 99, gender:"abc"} as Human;
// console.log(sayHi(person));
```

> typescript object type declaration [here!](https://developer-talk.tistory.com/192)

---

# Classes on Typescript part One

```javascript
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jay = new Human('jay', 18, 'male');

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(jay));

export {};
```

# Blockchain Creating a Block

```javascript
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '2020202020', '', 'hello', 12345);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};

```

---

# Creating a Block part Two

```javascript
import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,

    previousHash: string,
    data: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '2020202020', '', 'hello', 12345);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};

```

> npm i crypto-js
> npm i --save-dev @types/crypto-js
> [crypto.js](https://www.npmjs.com/package/crypto-js)

---
