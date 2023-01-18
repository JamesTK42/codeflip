// window.onload = printCode;
// flip the card
const card = document.getElementById("card")

card.addEventListener("click", flipCard);
function flipCard() {
    card.classList.toggle("flipCard");
}

// access the array +functions w/ array
const url = './array.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('code') // Prints result from `response.json()` in getRequest
        function randomInt(max) {

            return Math.floor(Math.random() * max);
        }

        function randomPick(array) {
            return array[randomInt(array.length)]
        }

        randomPick(data)

        var item = randomPick(data)

        console.log(item.id);
        console.log(item);
        console.log(item.Code);
        console.log(item.Description);
        console.log(item.Title);

        window.onload =
            document.getElementById("title").innerHTML = (item.Title);
        document.getElementById("desc").innerHTML = (item.Description);
        document.getElementById("code").innerHTML = (item.Code);
        ;
        let button = document.querySelector("#myButton");
        button.addEventListener("click", updateArray);
        function updateArray() {
            var item = randomPick(data)

            document.getElementById("title").innerHTML = (item.Title);
            document.getElementById("desc").innerHTML = (item.Description);
            document.getElementById("code").innerHTML = (item.Code);
        }
    })
    .catch(error => console.error(error))

