// Replacing an element with a new element
// Create the new element
const newHeading = document.createElement('h2');
// Add id to it
newHeading.id = "Task-head";
// Adding text to it
newHeading.appendChild(document.createTextNode('Task List'));

// Getting the old heading 
const oldHeading = document.getElementById('Task-title');
// Bu to replace we need the parent of the element we are to replace
// Getting the parent
const parent = document.querySelector('.card-action');
// Replacing it
parent.replaceChild(oldHeading, newHeading);

// Removin element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[1].remove();

// Remove using child
list.removeChild(lis[0]);

// CLASSES AND ATTRIBUTES
// Classes
const firstli = document.querySelector('li:first-child');
const link = firstli.children[1];

link= link.classList;
link = link.classList.add('test');
link = link.classList[0];
link = link.classList.remove('test');

// Attributes
link = link.getAttributes;
link = link.setAttribute('href', 'http://google.com');
// checking if it has attributes
link = link.hasAttribute('href');
link = lik.removeAttribute('title');