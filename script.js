let genArrayBtn = document.getElementById("gen-array-btn");
let sortArrayBtn = document.getElementById("sort-array-btn");
let selectionSortBtn = document.getElementById("selection-sort-btn");


let barContainer = document.getElementById("bar-container");
let barsAmountSlider = document.getElementById("slider-amount-bars")

// Default array lenght
// let arrayLenght = 50;
let currentValue = 20;

function randomInt(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
};

function generateArray(currentValue) {
    barContainer.innerHTML = "";
    let maxValue = 20;
    let minValue = 10;
    let arrayLenght = currentValue;
    let newArray = new Array(arrayLenght);
    
    for (let i = 0; i < arrayLenght; i++) {
        newArray[i] = randomInt(minValue, maxValue);
    }
    console.log(daskhda)
    return newArray;
};

// let array = generateArray();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renderizeBars(array) {
    for (let i = 0; i < array.length; i++) {
        let newBar = document.createElement("div");
        newBar.classList.add("bar");
        newBar.style.height = array[i] * 10 + "px";
        newBar.style.borderRadius = "3px";
        barContainer.appendChild(newBar);
    }
};

async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                for (let k = 0; k < array.length; k++) {
                    bars[k].style.backgroundColor = "White";
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j].style.backgroundColor = "Green";
                bars[j + 1].style.backgroundColor = "Green";
                await sleep(1);
            }
        }
    }
    // cleanBars();
    return array;
}

async function selectionSort(inputArr) { 
    let n = inputArr.length;

    let bars = document.getElementsByClassName("bar");

    for(let i = 0; i < n; i++) {
        // console.log(i);
        // Finding the smallest number in the subarray
        let min = i;
        bars[i].style.backgroundColor = "Blue";

        for(let j = i+1; j < n; j++){

            bars[j].style.backgroundColor = "LightGray";
            await sleep(10);
            if(inputArr[j] < inputArr[min]) {
                min=j; 
                bars[min].style.backgroundColor = "Red";
            }
        }
        bars[min].style.backgroundColor = "Green";
        await sleep(500);
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i]; 
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;      


            bars[i].style.height = inputArr[i] * 10 + "px";
            bars[min].style.height = inputArr[min] * 10 + "px";

        }
        // bars[i + 1].style.backgroundColor = "Blue";
        for (let k = 0; k < array.length; k++) {
            bars[k].style.backgroundColor = "White";
        }
    }
    cleanBars();
    return inputArr;
}

function cleanBars() {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        bars[i].style.backgroundColor = "White";
        // console.log("xd");
    }
    barContainer.innerHTML = " ";
    renderizeBars(array);
}


document.addEventListener("DOMContentLoaded", function () {
    array = generateArray(currentValue);
    renderizeBars(array);
});

genArrayBtn.addEventListener("click", function () {
    array = generateArray(currentValue);
    renderizeBars(array);
})

sortArrayBtn.addEventListener("click", function () {
    let sortedArray = bubbleSort(array);
    console.log(sortedArray);
})

selectionSortBtn.addEventListener("click", function () {
    let sortedArray = selectionSort(array);
    console.log(sortedArray);
})

barsAmountSlider.addEventListener("input", () => {
    currentValue = Number(barsAmountSlider.value);
    console.log(currentValue);
    array = generateArray(currentValue);
    renderizeBars(array);
})
