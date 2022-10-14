const clearBtn = document.querySelector('a');
const card = document.querySelector('.jumbotron');
const heading = document.querySelector('h1'); 

// Click 
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown - pressing down the mouse
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup -  pressing down the mouse but after it is let go that's when the event fires
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseleave,Mouseover, Mouseenter, Mouseout
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseout', runEvent);
// card.addEventListener('mouseover', runEvent);
// Mousemove shows where the mouse moved to. 
card.addEventListener('mousemove', runEvent);


function runEvent(e) {

    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `mouseX: ${e.offsetX}, moouseY: ${e.offsetY}`;
    document.querySelector('.jumbotron').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

}