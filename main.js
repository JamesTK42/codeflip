import coding from './array.json' assert { type: 'json' };

window.onload = printCode;
// shows content on load

const card = document.getElementById("card")

card.addEventListener("click", flipCard);
function flipCard() {
    card.classList.toggle("flipCard");
}

// card effects



function randomInt(max) {

    return Math.floor(Math.random() * max);
}

function randomPick(array) {
    return array[randomInt(array.length)]
}

randomPick(coding)

// random number from amount in array of codes


var item = randomPick(coding)

console.log(item.id);
console.log(item);
console.log(item.Code);
console.log(item.Description);
console.log(item.Title);

// console check



function printCode() {
    document.getElementById("title").innerHTML = (item.Title);
    document.getElementById("desc").innerHTML = (item.Description);
    document.getElementById("code").innerHTML = (item.Code);
};
// print content to html

let button = document.querySelector("#myButton");
button.addEventListener("click", updateArray);
function updateArray() {
    var item = randomPick(coding)

    document.getElementById("title").innerHTML = (item.Title);
    document.getElementById("desc").innerHTML = (item.Description);
    document.getElementById("code").innerHTML = (item.Code);
}

// on button click new code and print
