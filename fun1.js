function show() {
    console.log("named or non parameterized function is called");


};


show();

function show2(name,age,dept) {
    console.log(`my name is ${name} and age is ${age} and department ${dept}`);
    
};

show2("hello", 21, "bca");

const add = function (a, b) {
    return a + b;
}

console.log(add(3, 4));