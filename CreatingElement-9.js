// Creating elements in the DOM
const li = document.createElement('li');

// Add class
li.className = "Item-collection";

// Add id
li.id = "new-item";

// Add title
li.title = "New Item";

// Add Attributes
li.seAttributes = ('href', "http://www.google.com");

// Create Text and Append
li.appendChild(document.createTextNode("Hello, world!"));

// Adding the child we created about to the document
document.querySelector('ul.collection').appendChild(li);

// Creating a link and adding it to the li we created
const link = document.createElement("a");
// Adding the classes to the link
link.className = "secondary-link delete-item";
// Adding icon to that link
link.innerHTML = "<i class= fa fa-spider></>"

// Appending that link to the li
li.appendChild(link)

console.log(li);