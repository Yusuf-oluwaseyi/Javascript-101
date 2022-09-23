    // Traversing inside the documents- moving up and down from the nodes
  
  let val;

  const items = document.querySelectorAll('ul');
  const lists = document.querySelector('li');


  val = items;
  val = lists;
//   Getting child nodes - which returns nodelists - This comes with a line break - text
  val =  lists.childNodes;



//   1 - Elements
//   2 - Attributes (deprecated)
//   3 - text nodes
//   8 - comments
//   9 - Documents itself
//   10 - Doctype


// Getting children - which returns HTMLcollections
    val = lists.children;
    val = lists.children[0];
    val = lists.children[1].textContent = "Hello";

    // Getting Childeren of children - which returns HTMLcollections
    val = lists.children[0].children.id = "test-link";
    // val = lists.firstChild; - this gives the first child which is the line break - Text.
    // val = lists.firstChildElement; - this gives the first child whic is an Element.

    val = lists.lastChild;;
    val = lists.lasstChildElement;

// count child elements
   val = lists.childElementCount;

//    Getting parents elements
    val = lists.parentNode;
    val = lists.parentNode[0];
    val = lists.parentNode.parentNode;
    val = lists.parentElement.parentElement;

    // Getting nextsiblings elements
    val = lists.nextSibling;
    val = lists.nextElementSibling;
    val = lists.nextElementSibling.nextSibling;

    // Getting previoussiblings elements
    val = lists.previousElementSibling;



  console.log(val);