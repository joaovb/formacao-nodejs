const minimist = require("minimist");
// externo
const args = minimist(process.argv.slice(2));

//interno
const soma = require("./soma").soma;
//soma(2, 2);
console.log(args);
const a = parseInt(args["valor1"]);
const b = parseInt(args["valor2"]);
soma(a, b);
