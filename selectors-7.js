// document.getElementById
// document.getElementById("text").id;

// Using document.getElementById to change content

// document.getElementById("test").textContent = "Approved";
// document.getElementById("test").innerText = "My first grade";
// document.getElementById("test").innerHTML = '<span style="color:red">Grade A</span>';

// We can't use document.getElementById so many times (just once for a partoicular Id)
// so we store it in a variable.

const taskTitle = document.getElementById('test');
// then use that variable 
taskTitle.textContent = "Declined";
taskTitle.innerHTML = '<strong>TOBA<strong>';

// querySelector.
// console.log(document.querySelector("#test")); - By Id
// console.log(document.querySelector(".card")); - by class
// console.log(document.querySelector("h5")); - by elements


// Using querySelector to select single elements, if same with the same class it select the first elements.
document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "red";
document.querySelector('li:last-child').style.color = "green";
document.querySelector('li:nth-child(3)').style.background = "#ccc";
document.querySelector('li:nth-child(4)').textContent = "Hello World";

// QUERYSELECTOR
// document.getElementByClassName;
// This is done on a global scale, so any classs with the name item-card will be affected
const items = document.getElementsByClassName('item-card');
items.style.color = "red";
items[0].textContent = "For you alone";

// This affects only the class name inside the ul alone
const lists = document.querySelector('ul').getElementsByClassName('item-card');
lists.innerHTML = "Bye Bye";

// Selecting by tagnames.
let lis = document.getElementsByTagName("li");
lis.textContent = "Hello";
lis[3].style.color ="#081822";

// All these are not arrays, They are html collections
// converting HTMLcollections to arrays

// lis = Array.from(lis);
// lis.reverse(); - An Array method

// We can use the forEach method now that we have converted it to arrays

lis.forEach(function(li) {


    li.textContent = "Hello";
   console.log(li); 
});

// QUERYSELECTORALL
// This return a nodelist, which means you can perform things like foreach without having to convert to arrays
items = document.querySelectorAll("ul.items li.item-cards");

items.forEach(function(item) {

    item.innerHTML = "hello";
    console.log(item);
});
// Usin the odd and even nth-child elements

const itemsOdd = document.querySelectorAll('li:nth-child(odd)');

for(i = 0; i < itemsOdd.length; i++) {

    itemsOdd[i].style.backgroundColor = '#f4f4f4';
}