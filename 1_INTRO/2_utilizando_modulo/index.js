const fs = require("fs"); // Importando o modulo do node para ler arquivos

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
