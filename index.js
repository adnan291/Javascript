// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title= 'ITEMS';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8].textContent="Hello");
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// // Get ELement by ID
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
// headerTitle.innerHTML='<h3>Hello</h3>'
// header.style.borderBottom='SOLID 3PX #000';


// //Get Element By Class Name
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.backgroundColor='green';

// for(var i=0; i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

//Get Element By Tag Name
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].style.backgroundColor='green';

// for(var i=0; i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

// Query Selector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='using query selector';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="Send";

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='purple';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var secondItem=document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color='white';

// Query SelectorAll

var li=document.querySelectorAll('.list-group-item');
console.log(li);

li[1].style.color='green';

var odd= document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
 odd[i].style.backgroundColor='green';   
}