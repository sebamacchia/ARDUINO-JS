const five = require('johnny-five'); 
const board = new five.Board();

board.on('ready', () => {
    console.log('yeah');
})