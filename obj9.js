

let basket = {}
basket.name = "dart";

let user = {};
user.name = "java";
user.age=32



// my logic
function isEmpty(object) {
    let i = 0;
    for (let k in object) {
        if (object[k]) {
            i++;
            break;
        }
    }
    if (i == 1) {
        console.log("kuch hai");
    } else {
        console.log("khali hai ");
    }
}

//isEmpty(basket);


// one more logic
function iisEmpty(object) {
    for (let i in object) {
        return false;
    };
    return true;
};

//iisEmpty(basket);


// One more logic


// console.log(Object.keys(user));

// let conf = Object.keys(user).length;
// console.log(conf);

// if (conf != 0) {
//     console.log("kuch hai")
// } else (
//     console.log("khali hai")
// )

function isObjectEmpty(object) {
    if (!object) {
        console.log("object exist hi nahi karta");
        return;
    }
    if (Object.keys(object).length === 0) {
        console.log("khali hai ");
    } else {
        console.log("kuch hai ");
    }
}

isObjectEmpty(user);