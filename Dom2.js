//Traversing The DOM
var itemList=document.querySelector('#items');

//Parent Element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);

//Last Child
console.log(itemList.lastChild);

//Last Element Child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Item 04";

//Child Node
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='cyan';


//First Child
console.log(itemList.firstChild);

//First Element Child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Item 01";

//Next Sibling
console.log(itemList.nextSibling);

//Next Element Sibling
console.log(itemList.nextElementSibling);

//Previous Sibling
console.log(itemList.previousSibling);

//Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//Create Element

//Create a div
var newDiv=document.createElement('div');

//Add Class
newDiv.className='hello';

//Add Id
newDiv.id='hello1';

//Set attribute
newDiv.setAttribute('title','Hello Div');

//Create text Node
var newDivtText=document.createTextNode('Hello World');

//Append Text to div
newDiv.appendChild(newDivtText);

console.log(newDiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv, h1);

var div=document.querySelector('div .card.card-body');
var ul=document.querySelector('div div ul');

div.insertBefore(newDiv, ul);
