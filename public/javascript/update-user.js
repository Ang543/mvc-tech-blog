async function userUpdateHandler(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const location = document.querySelector('input[name="location"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    //const id = req.session.user_id

    let body = {};

    if(username) {
      body.username = username;
    }

    if(email) {
      body.email = email;
    }

    if(phone) {
      body.phone = phone;
    }

    if(location) {
      body.location = location;
    }

    if(password) {
      body.password = password;
    }
    

    const response = await fetch('/api/users/:id', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
 
  
  document
    .querySelector("#submit-form")
    .addEventListener("submit", userUpdateHandler);