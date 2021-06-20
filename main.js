let a = 1_00;
let b = 2_00.55;
let c = 1e2;
let d = 2.4;

//find smallest number in all variable
console.log( Math.trunc( Math.min(a, b, c, d)) );  // 2

// use variable a + b one time to get the needed output
console.log( d%d + Math.pow(a, 2) );            // 10000
console.log(Math.pow(a, 2) * Math.pow(d, 0))    // 10000
console.log( Math.pow( a, Math.trunc( d ) ) );  // 10000

//get  integer "2" from d variable with methods
console.log( Math.trunc( d ) );       // 2
console.log( Math.floor( d ) );       // 2
console.log( Math.round( d ) );       // 2
console.log( Math.ceil( d ) - +true ); // 2

// use variables b + d to get this values 

console.log( ( Math.floor( b ) / Math.ceil( d ) ).toFixed( 2 ) );        // 66.67 => string
console.log( Math.round( ( Math.floor( b ) / Math.ceil( d ) ) ) );       // 67    => number