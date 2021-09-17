

function clearForm(event){
    event.preventDefault();
    document.getElementById("website-add").value = "";
    document.getElementById("add-email").value = "";
    document.getElementById("add-username").value = "";
    document.getElementById("add-password").value = "";

}

//document.getElementById('saveNewPassword').addEventListener('click', saveNewPassword);
document.getElementById('clearNewForm').addEventListener('click', clearForm);