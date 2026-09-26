

let user = {
    name: "john",
    age: 30,
    isAdmin: true,
};
let cart = {};

// console.log(user);
// console.log(user.name);
// console.log(user.isAdmin);

for (let key in user) {
    //console.log(key);
    //console.log(user[key]);

    console.log(`${key} ${user[key]}`)
}

// for (let k in user) {
//     console.log(user[k]);
// }

