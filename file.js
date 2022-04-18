// document.getElementById("counter").innerText = 5;

let count=0;
let counter=document.getElementById("counter");
let prev=document.getElementById("prev");
function increament() {
    count=count+1
    counter.innerText=count;
}
function save() {
    value = count;
    counter.innerText=0;
    console.log(value);
    let str = value + " - ";
    prev.textContent+= str;
    count=0;
}

console.log(count);