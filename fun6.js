function say() {
    console.log("hello");
};
say();
console.log(say);

let hey = say;
console.log(hey);
hey();