let userEmail = getCookie('email');
ajax('core/get_user_data.php', 'post', getUserData, {email: userEmail});

function getCookie(cname) {
    let name = cname + "=",
        decodedCookie = decodeURIComponent(document.cookie),
        ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(data) {
    data = JSON.parse(data);
    document.getElementById('update-name').value = data.name;
    document.getElementById('update-pass').value = data.password;
    document.getElementById('update-birthday').value = data.birthday;
    document.querySelector(`input[value="${data.sex}"]`).checked = true;
}

document.getElementById('update-submit').addEventListener('click', e => {
    e.preventDefault();

    let sex = document.querySelectorAll('.update-sex');
    sex.forEach(element => {
        if (element.checked === true) {
            sex = element.value;
        }
    });

    let updateData = {
        email: userEmail,
        name: document.getElementById('update-name').value,
        pass: document.getElementById('update-pass').value,
        birthday: document.getElementById('update-birthday').value,
        sex: sex
    };
    
    ajax('core/update_user_data.php', 'post', updateUserData, updateData);
});

function updateUserData(result) {
   result == 1 ? showAlert('Data successfully updated') : showAlert('Update error')
}