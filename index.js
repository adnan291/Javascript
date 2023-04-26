console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title= 'ITEMS';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
//console.log(document.all[8].textContent="Hello");
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

Get ELement by ID
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='GoodBye';
headerTitle.innerHTML='<h3>Hello</h3>'
header.style.borderBottom='SOLID 3PX #000';



