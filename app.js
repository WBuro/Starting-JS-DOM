
//Styling Elements

/* const title = document.querySelector("#main-heading");

title.style.color = 'red';

console.log(title); */


/* const listItems = document.querySelectorAll(".list-items");



for(i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize ="5rem"
} */



//Creating Elements

/* const ul = document.querySelector('ul');
const li = document.createElement('li'); */

//Adding Elements

/* ul.append(li); */

//Modifying the Text

/* li.innerText = "X-men"; */

// Modifying Atributes & Classes

/* li.setAttribute("id","main-heading");
li.removeAttribute("id"); */

/*  li.classList.add('list-items');

console.log(li.classList.contains('list-items')); */

//Remove Elements

/* li.remove();    */


//Traverse the DOM


//Parent Node Traversal

//let ul = document.querySelector('ul');

/* console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement); */

/* const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement); */


//Child Node Traversal

let ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'aqua';