import { argv } from 'node:process';
import chalk from 'chalk';
import colors from 'color-name';
import { colord } from 'colord';
import Rando from 'js-rando';

let rando = new Rando();
let userInput = argv[2];
let colorHex = rando.RandomHexColor();

if (userInput) {
}

//console.log(chalk.hex(userColor)('###############################'));

//console.log(inputColor);

//console.log(
//colord({
//r: inputColor[0],
//g: inputColor[1],
//b: inputColor[2],
//a: 0,
//}).toHex(),
//);

//

console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('#####                     #####'));
console.log(chalk.hex(colorHex)(`#####       ${colorHex}       #####`));
console.log(chalk.hex(colorHex)('#####                     #####'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
console.log(chalk.hex(colorHex)('###############################'));
