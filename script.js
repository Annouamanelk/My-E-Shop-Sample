var totalProductBlue = 5;
var currentproductBlue = 0;
var totalProductPurple = 10;
var currentproductPurple = 10;
var totalProductBlack = 15;
var currentproductBlack = 15;
var totalProductRed = 20;
var currentproductRed = 20;
var totalProductPink = 25;
var currentproductPink = 25;

var buy = document.getElementById("buy")
var buyNow = document.getElementById("buyNow")
var stock = document.getElementById("stock")

function calculateWidth(color) {
    switch (color) {
        case 'blue':
            currentproductBlue -= 1
            break;
        case 'purple':
            currentproductPurple -= 1
            break;
        case 'black':
            currentproductBlack -= 1
            break;
        case 'red':
            currentproductRed -= 1
            break;
        case 'pink':
            currentproductPink -= 1
            break;
        default:
            console.log("error !");
    }
    var totalProduct;
    var currentproduct;
    switch (color) {
        case 'blue':
            totalProduct = totalProductBlue
            currentproduct = currentproductBlue
            break;
        case 'purple':
            totalProduct = totalProductPurple
            currentproduct = currentproductPurple
            break;
        case 'black':
            totalProduct = totalProductBlack
            currentproduct = currentproductBlack
            break;
        case 'red':
            totalProduct = totalProductRed
            currentproduct = currentproductRed
            break;
        case 'pink':
            totalProduct = totalProductPink
            currentproduct = currentproductPink
            break;
        default:
            console.log("error !");
    }
    if (currentproduct <= 0) {
        buyNow.innerHTML = "SOLD OUT !"
        stock.style.visibility = "hidden"
        stock.style.marginTop = "-12px"
        buy.style.background = "white"
        buyNow.style.color = "red"
        return
    }
    var percentage = (currentproduct / totalProduct) * 100
    console.log(percentage)
    buy.style.background = "-webkit-linear-gradient(left, orange " + percentage + "%, white 0%)"
    stock.innerHTML = currentproduct + " left out of " + totalProduct
}

calculateWidth("black")
currentproductBlack = 15
var percentage = (currentproductBlack / totalProductBlack) * 100
buy.style.background = "-webkit-linear-gradient(left, orange " + percentage + "%, white 0%)"
stock.innerHTML = currentproductBlack + " left out of " + totalProductBlack

var productImage = document.getElementsByClassName("productImage")
var currTime = document.getElementById("currTime")
var heartImage = document.getElementById("heartImage")
var heartRate = document.getElementById("heartRate")
var heartRateFeature = document.getElementById("heartRateFeature")
var timeFeature = document.getElementById("timeFeature")
var blue = document.getElementById("blue")
var purple = document.getElementById("purple")
var black = document.getElementById("black")
var red = document.getElementById("red")
var pink = document.getElementById("pink")
var currentColorChoice = document.getElementById("currentColorChoice")

buy.addEventListener("click", function () {
    var color;
    if (window.getComputedStyle(blue).borderColor == "rgb(0, 0, 0)") color = "blue"
    else if (window.getComputedStyle(purple).borderColor == "rgb(0, 0, 0)") color = "purple"
    else if (window.getComputedStyle(black).borderColor == "rgb(0, 0, 0)") color = "black"
    else if (window.getComputedStyle(red).borderColor == "rgb(0, 0, 0)") color = "red"
    else color = "pink"
    calculateWidth(color)
})

function time() {
    setInterval(() => {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        if (hours < 10) hours = "0" + hours
        if (minutes < 10) minutes = "0" + minutes
        if (seconds < 10) seconds = "0" + seconds
        currTime.innerHTML = hours + " : " + minutes + " : " + seconds
    }, 0);
}

time()

heartRateFeature.addEventListener("click", function () {
    timeFeature.style.borderColor = "white"
    heartRateFeature.style.borderColor = "black"
    currTime.style.visibility = "hidden"
    heartImage.style.visibility = "visible"
    heartRate.style.visibility = "visible"
})

timeFeature.addEventListener("click", function () {
    heartRateFeature.style.borderColor = "white"
    timeFeature.style.borderColor = "black"
    heartImage.style.visibility = "hidden"
    heartRate.style.visibility = "hidden"
    currTime.style.visibility = "visible"
})

function choseColor(color) {
    var array = [purple, black, red, pink, blue]
    for (var i = 0; i < array.length; i++) {
        if (color == array[i].id) {
            array[i].style.borderColor = "black"
            productImage[0].src = "Smartwatch Images/" + color + ".png"
            currentColorChoice.style.color = window.getComputedStyle(array[i]).backgroundColor
            currentColorChoice.innerHTML = color
        }
        else array[i].style.borderColor = "white"
    }
    var totalProduct;
    var currentproduct;
    switch (color) {
        case 'blue':
            totalProduct = totalProductBlue
            currentproduct = currentproductBlue
            break;
        case 'purple':
            totalProduct = totalProductPurple
            currentproduct = currentproductPurple
            break;
        case 'black':
            totalProduct = totalProductBlack
            currentproduct = currentproductBlack
            break;
        case 'red':
            totalProduct = totalProductRed
            currentproduct = currentproductRed
            break;
        case 'pink':
            totalProduct = totalProductPink
            currentproduct = currentproductPink
            break;
        default:
            console.log("error !");
    }
    var percentage = (currentproduct / totalProduct) * 100
    console.log(percentage)
    buy.style.background = "-webkit-linear-gradient(left, orange " + percentage + "%, white 0%)"
    stock.innerHTML = currentproduct + " left out of " + totalProduct
    if (currentproduct > 0) {
        buyNow.innerHTML = "BUY NOW"
        stock.style.visibility = "visible"
        stock.style.marginTop = "5px"
        buy.style.background = "-webkit-linear-gradient(left, orange " + percentage + "%, white 0%)"
        buyNow.style.color = "black"
    }
    else {
        buyNow.innerHTML = "SOLD OUT !"
        stock.style.visibility = "hidden"
        stock.style.marginTop = "-12px"
        buy.style.background = "white"
        buyNow.style.color = "red"
    }
}

blue.addEventListener("click", function () {
    choseColor("blue")
})
purple.addEventListener("click", function () {
    choseColor("purple")
})
black.addEventListener("click", function () {
    choseColor("black")
})
red.addEventListener("click", function () {
    choseColor("red")
})
pink.addEventListener("click", function () {
    choseColor("pink")
})