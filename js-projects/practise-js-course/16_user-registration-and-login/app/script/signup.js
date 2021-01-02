document.getElementById('signup-submit').addEventListener('click', e => {
    e.preventDefault();
    let name = document.getElementById('signup-name').value,
        pass = document.getElementById('signup-pass').value,
        email = document.getElementById('signup-email').value,
        birthday = document.getElementById('signup-birthday').value,
        sex = document.querySelectorAll('.signup-sex');
    sex.forEach(element => {
        if (element.checked === true) {
            sex = element.value;
        }
    });
    let data = {
        name: name,
        pass: pass,
        email: email,
        birthday: birthday,
        sex: sex
    };
    
    ajax('core/signup.php', 'post', signup, data);

    function signup(result) {
        if (result == 2) {
            showAlert('Fill all fields');
        } else if (result == 1) {
            showAlert('You are successfully registered');
        } else {
            showAlert('Error! Repeat registration later');
        }
    }
});

document.getElementById('login-submit').addEventListener('click', e => {
    e.preventDefault();
    let email = document.getElementById('login-email').value,
        pass = document.getElementById('login-pass').value;
    let data = {
        email: email,
        pass: pass
    };
    
    ajax('core/login.php', 'post', login, data);

    function login(result) {
        if (result == 0) {
            showAlert('Cant find user');
        } else if (result == 2) {
            showAlert('Fill all fields');
        } else {
            result = JSON.parse(result);
            let d = new Date();
            d.setTime(d.getTime() + (10 * 60 * 1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}`;
            location.href = 'cabinet.php';
        }
    }
});


