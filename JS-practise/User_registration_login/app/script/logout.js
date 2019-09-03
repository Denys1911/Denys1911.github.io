document.getElementById('logout').addEventListener('click', () => {
    let cookie = document.cookie;
    let d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `${cookie}; expires=${expires}`;
    location.reload();
});