import chalk from 'chalk';
import Rando from 'js-rando';
let rando = new Rando();
let numOfLine = 9;
let colorHex = rando.RandomHexColor();

for (let i = 0; i < numOfLine; i++) {
  console.log(chalk.hex(colorHex)('###############################'));
}
