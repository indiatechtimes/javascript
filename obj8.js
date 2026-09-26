let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
};
for (let k in codes) {
    console.log(k);
};
for (let j in codes) {
    console.log(codes[j])
}
for (let code in codes) {
    console.log(`${code} ${codes[code]}`);
};


