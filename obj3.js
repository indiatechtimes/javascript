let user = {
    name: "dart",
    add: "kol",
    'phone number': "55555555",

};

console.log(user);
user.role = "admin";
console.log(user);

user['isActive'] = true;
console.log(user);

delete user.add;

console.log(user);
user['isActive'] = false;

console.log(user);
