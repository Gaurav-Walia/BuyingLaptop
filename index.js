const express = require('express');
const app = express();
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

r1.on("line", (line) => {
    input.push(line);
});

r1.on("close", () => {
    let priceRating = {};
    let priceRange = {};
    let priceArray = [];
    let rangeArray = [];
    let laptopCount = input[0];
    let maxRating = [];
    
    for (let i = 1; i <= parseInt(laptopCount); i++) {
        priceRating.price = input[i].split(" ")[0];
        priceRating.rating = input[i].split(" ")[1];
        priceArray.push(priceRating);
    }

    for (let j = parseInt(laptopCount) + 2; j < input.length; j++) {
        priceRange.minRange = input[j].split(" ")[0];
        priceRange.maxRange = input[j].split(" ")[1];
        rangeArray.push(priceRange);
    }

    for (let k = 0; k < rangeArray.length; k++) {
        for (let z = 0; z < priceArray.length; z++) {
            maxRating = priceArray[k].rating;
            if ((priceArray[z].price < rangeArray[k].maxRange) && 
                (priceArray[z] > rangeArray[k].minRange) && 
                (priceArray[z].rating > maxRating)) {
                maxRating.push(priceRating);
            }
        }
        console.log("Result: ", maxRating);
    }
 });

app.listen(3000, () => {});
