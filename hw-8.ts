//task 1

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

fibonacci.forEach((value) => console.log(value));

//task 2

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const extendedUsers = users.map((value: string, index: number) =>
  console.log(`member ${index + 1}: ${value}`)
);

//task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

const posNums = numbers.filter((x) => x > 0);

console.log(posNums);

//task 4

const fibonacci2 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

console.log(fibonacci2.reduce((x, y) => x + y));

//task 5

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

console.log(numbers2.find((x) => x % 2 === 0));

//task 6

const numbers3 = [5, 9, 13, 24, 54, 21, 10, 13, 99, 1, 5, 15, 32];

console.log(numbers2.some((x) => x % 3 === 0 && x % 5 === 0));

//task 7

const numbers5: number[] = [2, 4, 8, 6, 21, 15, 42, 31];

console.log(
  numbers5.every((value) => {
    let x: number = value * value;
    let y: number[] = x.toString().split("").map(Number);
    const sum: any = y.reduce((prevValue, curValue) => prevValue + curValue);
    if (sum % 2 !== 0) {
      return true;
    } else return false;
  })
);

//task 8

const ingredient = new Map<string, number>([
  ["Огурцы", 200],
  ["Помидоры", 300],
  ["Петрушка", 50],
  ["Уроп", 50],
  ["Сметана", 150],
]);

for (let [product, amount] of ingredient.entries()) {
  if (amount > 100) {
    console.log(product, amount);
  }
}

//task 9

const numbers4 = [
  1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4,
  5, 61, 2, 4, 5, 6, 3, 5,
];

const uniqNum = new Set(numbers4);

const uniqNumArr: number[] = [];

for (let x of uniqNum) {
  uniqNumArr.push(x);
}

console.log(uniqNumArr);

//task 10

let arr: string[] = ["one", "two", "three"];
let secondEl = "";
let thirdEl = "";

arr.forEach((x, index, arr) => {
  if (index == 0) {
    secondEl = "bbb";
  } else if (index == 1) {
    thirdEl = "eee";
    secondEl = x;
  } else if (index == 2) {
    thirdEl = x;
    secondEl = arr[1];
  }
});

console.log(secondEl, thirdEl);

//task 11

type Iuser = {
  firstName?: string;
  surname?: string;
  age?: string;
};

let user: Iuser = {
  firstName: "Петр",
  surname: "Петров",
  age: "20 лет",
};

let { firstName = "Анон", surname = "Анонимович", age = "? лет" } = user;

console.log(firstName);
console.log(surname);
console.log(age);
