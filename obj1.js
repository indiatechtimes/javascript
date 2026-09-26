let user = new Object();
console.log(user);
console.log(typeof (user));



let product = {};
console.log(product);
console.log(typeof (product));


let items = {
    iphone: "iphone_18",
    bike: "hunter",
    car: "thar",
    gun: "hk417",
};
console.log(typeof (items));
console.log(items);
console.log(items.iphone);
console.log(items.gun);

let cart = {
    car: "thar",
};
console.log(cart);
console.log(cart.car);

let tojson = JSON.stringify(items);
console.log(tojson);
console.log(typeof (tojson));
let toObj = JSON.parse(tojson);
console.log(toObj);
console.log(toObj.bike);