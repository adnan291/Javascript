const myForm = document.querySelector('#my-form');
const sellpriceInput = document.querySelector('#sellprice');
const productInput = document.querySelector('#product');
const categoryInput = document.querySelector('#category');
const msg = document.querySelector('.msg');
const electronicList = document.getElementById('electronicItems'); 
const foodList = document.getElementById('foodItems'); 
const skincareList = document.getElementById('skincareItems'); 

myForm.addEventListener('submit', onSubmit);
electronicList.addEventListener('click', DeleteItem);
foodList.addEventListener('click', DeleteItem);
skincareList.addEventListener('click', DeleteItem);

window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/2bf4902cc0474bcf9003126488a446de/products")
  .then((response) => {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      displayUsers(response.data[i]);
    }
  })
  .catch((err) => {
    console.log(err);
  })
});

function onSubmit(e) {
  e.preventDefault();
  if(sellpriceInput.value === '' || productInput.value === '' || categoryInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    let myObj = {
      sellprice: sellpriceInput.value,
      product: productInput.value,
      category: categoryInput.value
    }
    axios.post("https://crudcrud.com/api/2bf4902cc0474bcf9003126488a446de/products", myObj)
    .then((response) => {
      displayUsers(response.data);
      sellpriceInput.value = '';
      productInput.value = '';
      categoryInput.value = '';
      msg.classList.add('success');
      msg.innerHTML = 'Product Added Successfully';
      setTimeout(() => msg.remove(), 3000);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

function displayUsers(item) {
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    var sellpriceText = document.createElement('span');
    sellpriceText.textContent = `sellprice: ${item.sellprice}, `;
    
    var productText = document.createElement('span');
    productText.textContent = `product: ${item.product}, `;
    
    var categoryText = document.createElement('span');
    categoryText.textContent = `category: ${item.category} `;
    
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.textContent = 'Delete';
    
    li.appendChild(sellpriceText);
    li.appendChild(productText);
    li.appendChild(categoryText);
    li.appendChild(deleteButton);
    
    li.dataset.key = item._id; // Set the key as a data attribute
    
    deleteButton.addEventListener('click', DeleteItem); // Add event listener to the delete button
    
    if (item.category == "electronic") {
      electronicList.appendChild(li);
    } else if (item.category == "food") {
      foodList.appendChild(li);
    } else {
      skincareList.appendChild(li);
    }
  }
  

  function DeleteItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure?')) {
        var li = e.target.parentElement;
        var key = li.dataset.key; 
        axios.delete(`https://crudcrud.com/api/2bf4902cc0474bcf9003126488a446de/products/${key}`)
          .then(() => {
            li.remove();
          })
          .catch((err) => {
            console.log(err);
          })
      }
    } 
  }
  



