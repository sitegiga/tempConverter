
let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');

function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

 function farToCel(){
    let output = (parseFloat(fahrenheit.value) -32) *5/9;
    celsius.value = parseFloat(output.toFixed(2));
}

