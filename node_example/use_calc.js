// const module = {
//     Calculator: ...
// };
// calculator = module.Calculator

const Calculator = require("./Calculator").Calculator;

// import { Calculator } from "./Calculator";  // если export или exports(стар)
// import Calculator from "./Calculator"; // если было export default
// require - блокирующий, import - неблокирующий, асинхронный

let calc = new Calculator();
console.log(calc.sum(5,5));

// Make module
//
// npm init
// это создаст package.json
// в "scripts" можно прописать команды например, "start": "node index.js", "my_com": "echo 'Ok'"
// запуск `npm start` или `npm run my_com`
//
// Установка модулей
// npm i --save
// npm i --save-dev для webpack
