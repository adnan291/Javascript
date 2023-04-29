const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const dobInput = document.querySelector('#dob');
const addressInput = document.querySelector('#address');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || dobInput.value === '' || addressInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    let myObj = {
      Name: nameInput.value,
      Email: emailInput.value,
      Phone: phoneInput.value,
      DOB: dobInput.value,
      Address: addressInput.value
    };
    let myObj_serial = JSON.stringify(myObj);
    localStorage.setItem(emailInput.value, myObj_serial);
    
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    dobInput.value = '';
    addressInput.value = '';

    displayUsers()
  }
}

var userList = document.getElementById('users');

function displayUsers(){
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;

    // Clear the list
    userList.innerHTML = '';

    // Loop through all items in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        // Get the key of the current item
        var key = localStorage.key(i);
        
        // Parse the JSON string into an object
        var user = JSON.parse(localStorage.getItem(key));
        
        // Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add text node with input value
        li.appendChild(document.createTextNode('Name:'));
        li.appendChild(document.createTextNode(user.Name));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode('Email:'));
        li.appendChild(document.createTextNode(user.Email));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode('Phone:'));
        li.appendChild(document.createTextNode(user.Phone));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode('DOB:'));
        li.appendChild(document.createTextNode(user.DOB));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode('Address:'));
        li.appendChild(document.createTextNode(user.Address));
        // Append li to list
        userList.appendChild(li);
    }
}
