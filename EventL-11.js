// document.querySelector('a').addEventListener('click', function(e) {
//     console.log('I was clicked');


//     e.preventDefault();
// });
// Using the preventDefault makes the button clicked not work. but the console.log still does.active

// Another way is having the function seperate and using the name function instead.

document.querySelector('a').addEventListener("click", onClick);


// function onClick(e) {
//     console.log("Clicked");
// }

// The EventListener Object - using target object to find class and the rest, using the e 
function onClick(e) {
    let val;
    val = e;


    // Target method e.g e.target.id to get the id
    val = e.target.className;
    e.target.innerText = "Hello";
    e.target.style.color = "red";


    // Event type
   val = e.type;

    // getting timestamp
   val = e.Timestamp;

    // Getting coord in relative to the window
    val = e.clientY;
   val = e.clientX;

    // Getting coord in relative to the element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}