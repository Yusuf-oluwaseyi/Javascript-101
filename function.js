// Write functions and passing parameters and arguments
// Having defaults parameter is =
function greet(firstname = ' Ajayi', lastname = 'Frescc') { 
    return 'Hello' + firstname + ' ' + lastname;
}
// console.log(greet(' John', 'Fire'));
// Ajayi and Frescc are the first parameter and defualt if John and fire wasn't provided.

const square = function (x) {

    return x*x;
};
// console.log(square(5));
// Creating an anonymous function and in this case called Function Expression.

// IMMEDIATE IVOKABLE FUNCTIONS or IIFEs
(function(){
    // console.log("IIFEs Ran..");
})();
// You can also pass parameters into them
(function(name){
    // console.log('Hello ' + name)
})('Toba');

// Property method, adding functions in objects
const todo = {
    add: function(){
        console.log('Add todo');
    },
    Edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}
todo.delete = function(){
    console.log('delete todo..');
}

todo.add();
todo.Edit(22);
todo.delete();