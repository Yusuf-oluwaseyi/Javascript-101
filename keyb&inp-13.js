const form = document.querySelector('form');
const task = document.querySelector('input');
const heading = document.querySelector('h5');

// Keydown event.
// task.addEventListener('keydown', runEvent);
// keyup
// task.addEventListener('keyup', runEvent);
// the keyup runs only when you let go of the kep you pressed.

// keypress event, runs when the key is pressed, its a  general event.
// task.addEventListener('keypress', runEvent);

// Focus event, runs when cursor of the input area is clicked. opposite is Blur
// cut - when you cut, paste, when you paste,
// task.addEventListener('focus', runEvent);
//  The input event fires anytime we input or do anything.
task.addEventListener('input', runEvent);

// Change - change event is fired when there is a change event, for example in the select option.


function runEvent(e) {

    console.log(`EVENT TYPE: ${e.type}`);

    // shows the value of the target.
    // console.log(e.target.value);
    // changes the value of the heading'h5' to the whatever is typed in the input.
    // heading.innerText = e.target.value;
}