$(document).ready(function () {
    const birthdayDate = moment('1998/11/19').format('DD MMMM YYYY');

    $('.birthday-date').append(birthdayDate);
    $('[data-tooltip="tooltip"]').tooltip();
    $('.show-alert-btn').click(handleClickOnShowAlertBtn);
    $('.convert-date-btn').click(handleClickOnConvertDateBtn);

    function handleClickOnShowAlertBtn() {
        $('.alert').slideToggle(400);
    }

    function handleClickOnConvertDateBtn() {
        let inputValue = $('.convert-date-input').val();
        inputValue = moment(inputValue).format('LL');
        $('.convert-date-output').html(`<b>Result: </b>${inputValue}`);
    }
});
