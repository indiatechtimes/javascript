

let user = {
    name: "dart",
    age: 55,
    gender: "male",
};

let user1 = user;

console.log(user);

user.sayHi = function () {
    return "hello";
};

console.log(user);
console.log(user.sayHi());

console.log(user1);

let sayNo = function () {
    return "NO";
};
user1.sayno = sayNo;
console.log(user1);
console.log(user);