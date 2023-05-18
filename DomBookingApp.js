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
    }

    axios.post("https://crudcrud.com/api/110bec9719914e9884cf3be8063a91ca/appointmentData", myObj)
    .then((response) => {
      console.log(response.data);
      displayUsers();
    })
    .catch((err) => {
      console.log(err);
    })

  //   let myObj_serial = JSON.stringify(myObj);
  // localStorage.setItem(emailInput.value, myObj_serial);
    msg.classList.add('success');
    msg.innerHTML = 'User Added Successfully';
    setTimeout(() => msg.remove(), 3000);
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

        li.appendChild(document.createTextNode(', Email: '));
        li.appendChild(document.createTextNode(user.Email));
       
        li.appendChild(document.createTextNode(', Phone: '));
        li.appendChild(document.createTextNode(user.Phone));
       
        li.appendChild(document.createTextNode(', DOB: '));
        li.appendChild(document.createTextNode(user.DOB));
       
        li.appendChild(document.createTextNode(', Address: '));
        li.appendChild(document.createTextNode(user.Address));
        
        // Create delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteBtn);

          // Create Edit button
          var editBtn = document.createElement('button');
          editBtn.className = 'btn btn-secondary btn-sm float-right edit';
          editBtn.appendChild(document.createTextNode('Edit'));
          li.appendChild(editBtn);

        // Append li to list
        userList.appendChild(li);
    }
}

// Remove User
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            var key = li.childNodes[3].textContent;
            localStorage.removeItem(key);
            li.remove();
        }
    }
}

// Edit User
function editItem(e){
    if(e.target.classList.contains('edit')){
      
            var li = e.target.parentElement;
            var key = li.childNodes[3].textContent;
           var user=JSON.parse(localStorage.getItem(key));
           nameInput.value=user.Name;
           emailInput.value=user.Email;
           phoneInput.value = user.Phone;
           dobInput.value = user.DOB;
           addressInput.value = user.Address;
            localStorage.removeItem(key);
            li.remove();
        
    }
}

// Event listener for delete button
userList.addEventListener('click', removeItem);
userList.addEventListener('click', editItem);