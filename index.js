import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const userInput01 = argv[2];
const userInput02 = argv[3];
let colorHex = randomColor();
const userColor = randomColor(userInput02);

if (userInput01) {
  colorHex = randomColor({
    luminosity: userInput02,
    hue: userInput01,
  });

  // if ((userInput02 = 'light')) {
  // colorHex = colord(colorHex).lighten(0.3).toHex();
  //} else if ((userInput02 = 'dark')) {
  //colorHex = colord(colorHex).darken(0.3).toHex();
  //}
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
