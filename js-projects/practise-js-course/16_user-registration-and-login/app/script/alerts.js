const alert = document.querySelector('.alert');
    showAlert = alertText => {
        alert.textContent = alertText;
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 2000);
    };