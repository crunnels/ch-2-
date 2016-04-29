// # # # #
//# # # #

//loop from zero to size of board
  //for each index do the modulo divisible by 2
  
var size = 8;

for ( var i = 0; i < size; i++ ) {
  if (i % 2 === 0) {
    console.log (' ');
  } else {
    console.log ('#');
    }
}
