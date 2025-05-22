let divs = document.querySelectorAll(".box");


let index = 1;
for (div of divs) {
    div.innerHTML = `div index ${index}`;
    index++;
}