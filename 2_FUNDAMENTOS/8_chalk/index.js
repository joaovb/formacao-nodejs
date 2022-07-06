const chalk = require("chalk");
const nota = 5;

if (nota >= 7) {
  console.log(chalk.green("Parabéns! Você foi aprovado!"));
} else {
  console.log(chalk.red("Voce pecisar fazer a recuperacao"));
}
