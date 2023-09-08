import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const userInput01 = argv[2];
const userInput02 = argv[3];
let colorHex = randomColor();

if (userInput01) {
  colorHex = randomColor({
    luminosity: userInput02,
    hue: userInput01,
  });
}

console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('#####                     #####'));
console.log(chalk.hex(colorHex)(`#####       ${colorHex}       #####`));
console.log(chalk.hex(colorHex)('#####                     #####'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
