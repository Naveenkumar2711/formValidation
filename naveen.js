document.getElementById('submitButton').addEventListener('click',function() {
const form = document.getElementById('userform');
const tablecontainer = document.getElementById('tablecontainer');
const formData = {
    firstname:form.firstname.value.trim(),
    lastname: form.lastname.value.trim(),
    email:form.email.value.trim(),
    checkbox:form.checkbox.checked,
    radio:form.querySelector('input[name = "radio"]:checked')? form.querySelector('input[name = "radio"]:checked').value:'';
    Comment:form.comment.value.trim(),
    dropdown:form.dropdown.value,

};
 let isValid = true;
  
document.querySelectorAll('.error').forEach((error)=> error )





}
