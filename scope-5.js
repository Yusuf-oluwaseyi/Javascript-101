// GLOBAL SCOPE
let a = 1;
var b = 2;
const c = 3;

console.log("Global scope: ", a, b, c);

function test() {
    let a = 4;
    var b = 5;
    const c= 6;

    console.log("Fuction scope: ", a, b, c);
}

test();