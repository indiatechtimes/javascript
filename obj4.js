let User = function user(name, role) {
    return {
        name: name,
        role: role,
    }
};

console.log(User);

let myUser = User("dart", "admin");
console.log(myUser);
console.log(myUser.name);




function product(name, color) {
    return {
        name: name,
        color: color,
    }
};
let userProduct = product("IPHONE", "WHITE");
console.log(userProduct);
console.log(userProduct.color);



function cart(item1, item2) {
    return {
        item1,
        item2,
    }
};

let myCart = cart("mobile", "keyboard");
console.log(myCart);
console.log(myCart.item1);
