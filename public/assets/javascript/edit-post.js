async function editFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("website-edit").value
  const password = document.getElementById("edit-password").value
  const username = document.getElementById("edit-username").value
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]; 
  console.log(title);
  const response = await fetch(`/api/passwords/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    website: title,
    website_password: password,
    website_username: username})
    
  });

  if (response.ok) {
    window.location.replace("/dashboard")
  } else {
    alert(response.statusText);
  }
}

document.getElementById("dashboard-edit-submit").addEventListener('click', editFormHandler);