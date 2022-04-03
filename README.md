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

### First steps with Typescript

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
