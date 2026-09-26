let basket={}
if (basket) {
    console.log(true);
}

for (let k in basket) {
    if (basket[k]) {
        console.log("kuch hai");
        break;
    } else {
        console.log("khaali hai ");
        break;
    }
}

// let i = 0;
// for (let k in cart) {
    
// }