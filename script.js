let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1){
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}

else {
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}