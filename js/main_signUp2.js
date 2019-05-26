var pass1 = document.getElementById('userPassword');
var pass2 = document.getElementById('userRepeatPassword');


  return status;
}

pass1.addEventListener('change', validatePassword);
pass2.addEventListener('keyup', validatePassword);

function validatePassword(){
    var submit = document.getElementById('submitBtn');
    if (pass2.value == pass1.value) {
        pass2.setCustomValidity('');
        submit.disabled = false;
    } else {
        pass2.setCustomValidity('Both passwords do not match');
        submit.disabled = true;
    }
}
