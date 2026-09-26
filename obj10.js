let salary = {
    john: 100,
    ann: 160,
    pete: 130,
};
let sum = 0;
for (let i in salary) {
    //console.log(salary[i]);
    sum = sum + salary[i];

}
console.log(sum);