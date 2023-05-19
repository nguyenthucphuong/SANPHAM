// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*
$(document).ready(function () {
    const inputFields = $('#soLuong, #donGia');
    inputFields.on('input', function () {
        let number = parseInt($(this).val().replace(/,/g, '').replace(/[^0-9]/g, ''));
        if (isNaN(number)) {
            number = 0;
        }
        $(this).val(number.toLocaleString('en-US'));
    });
});
*/
$(document).ready(function () {
    const inputFields = $('#soLuong, #donGia');
    inputFields.on('input', function () {
        let inputValue = $(this).val().replace(/,/g, '').replace(/[^0-9]/g, '');
        let number = 0;
        if (inputValue !== '') {
            number = parseFloat(inputValue);
        }
        $(this).val(number.toLocaleString('en-US'));
    });
});
