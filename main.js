let containerElement = document.getElementById('container');

for (let i=1; i<= 100; i++) {
    
    if ( i % 3 == 0 && i % 5 == 0) {
        containerElement.innerHTML += "<div class='box3'>FizzBuzz</div>"
    } else if (i % 5 == 0) {
        containerElement.innerHTML += "<div class='box2'>Buzz</div>"
    } else if (i % 3 == 0) {
        containerElement.innerHTML += "<div class='box1'>Fizz</div>"
    } else {
        containerElement.innerHTML += "<div class='box'>" + i + "</div>"
    }
}