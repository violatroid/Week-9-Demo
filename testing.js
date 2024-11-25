//what is a javascript testing framework? -A pile of JS code for testing JS | example: Chai, Nose
// Unit Testing - Testing a Single Unit
// Not Black Box testing which tests

function testMe(a, b){
    return a + b;
}

//console.log(testMe(6,7)) //exoact 13
testData = [
    { inputs: [6, 7], output: 13 },
    { inputs: [6, 7], output: 99 },
    { inputs: [12, 13], output: 25}
];

//specific one-liner without runner function
testData.forEach((t, i) => console.log(i, test)