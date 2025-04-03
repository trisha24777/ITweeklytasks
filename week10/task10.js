function calculateArea(length, breadth) {
    return length * breadth;
}

// Ask the user for the length and breadth
let length = parseFloat(prompt("Enter the length of the rectangle:"));
let breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));

// Calculate the area and display it
alert("Area of rectangle: " + calculateArea(length, breadth));
