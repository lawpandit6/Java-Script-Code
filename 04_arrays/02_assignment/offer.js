
let price = [250, 645, 300, 900, 50];
console.log(price);

for (let i = 0; i < price.length; i++) {
    let offer = price[i] / 10;
    price[i] = price[i] - offer;
}

//After 10% offer apply
//price will be 
console.log(price);

