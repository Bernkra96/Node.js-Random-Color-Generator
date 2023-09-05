import chalk from 'chalk';
import Rando from 'js-rando';
import { colord } from 'colord';
import colors from 'color-name';

let rando = new Rando();
let numOfLine = 9;
let colorHex = rando.RandomHexColor();
let inputColor = colors;
let userColor = colord({
  r: inputColor[0],
  g: inputColor[1],
  b: inputColor[2],
  a: 0,
}).toHex();

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

//colorHex = userColor;

for (let i = 0; i < numOfLine; i++) {
  console.log(chalk.hex(colorHex)('###############################'));
}
