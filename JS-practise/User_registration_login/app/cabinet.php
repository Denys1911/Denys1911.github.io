<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Personal cabinet</title>
    <link rel="shortcut icon" type="image/x-icon" href="./images/favicon/cloud.ico">
    <link rel="stylesheet" href="./css/cabinet.css">
</head>

<body>
    <div class="wrapper">
        <h1>User Page</h1>
        <button id="logout">Logout &rarrb;</button>
    </div>
    <form>
        <label class="label">
            Name: <input type="text" name="name" id="update-name">
        </label>
        <label class="label">
            Password: <input type="password" name="pass" id="update-pass">
        </label>
        <label class="label">
            Birthday: <input type="date" name="birthday" id="update-birthday">
        </label>
        <label class="label label-sex">Sex:
            <label class="label-radio">
                <input type="radio" value="male" name="sex" class="update-sex"><div class="radio-button"></div>male
            </label>
            <label class="label-radio">
                <input type="radio" value="female" name="sex" class="update-sex"><div class="radio-button"></div>female
            </label>
            <label class="label-radio">
                <input type="radio" value="other" name="sex" class="update-sex"><div class="radio-button"></div>other
            </label>
        </label>
        <button id="update-submit">Update</button>
    </form>
    <div class="alert"></div>
    <script src="./script/ajax.js"></script>
    <script src="./script/alerts.js"></script>
    <script src="./script/get_user_data.js"></script>
    <script src="./script/logout.js"></script>
</body>

</html>