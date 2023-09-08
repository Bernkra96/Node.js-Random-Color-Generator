import { argv } from 'node:process';
import chalk from 'chalk';
import { colord } from 'colord';
import toHex from 'colornames';

let userInput01 = argv[2];
let userInput02 = argv[3];
let colorHex = randomColor();

let userColor = toHex(argv[2]);

if ((userInput01 && !!'light') || (userInput01 && !!'dark')) {
  colorHex = userColor;

  if ((userInput02 = 'light')) {
    colorHex = colord(colorHex).lighten(0.3).toHex();
  } else if ((userInput02 = 'dark')) {
    colorHex = colord(colorHex).darken(0.3).toHex();
  }
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

function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const index = Math.round(Math.random() * (hex.length - 1));

    color += hex[index];
  }

  return color;
}
