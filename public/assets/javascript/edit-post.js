async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="dashboard-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/dashboard/edit/api/passwords/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.getElementById("edit").addEventListener('submit', editFormHandler);