function generateNumber(){
    var h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = Math.floor(Math.random()*1000);

    document.body.style.backgroundColor = generateRandomColor();

}

function generateRandomColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    var green = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    var blue = Math.floor(Math.random() * 256); // Random integer between 0 and 255

    // Construct the CSS color string
    var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return color;
}