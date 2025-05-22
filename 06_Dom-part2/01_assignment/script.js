let newBtm=document.createElement("button");
newBtm.innerHTML="<i>Click Me!</i>";

newBtm.style.backgroundColor="red";
newBtm.style.color="white";

newBtm.style.height="30px"
newBtm.style.width="80px"

document.querySelector("body").before(newBtm);