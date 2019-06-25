var mailImg = document.getElementById('mail');
mailImg.onmouseover = function() {
    mailImg.style.width = '15%';
    mailImg.style.height = '15%';

}
mailImg.onmouseout = function() {
    mailImg.style.width = '80px';
    mailImg.style.width = '80px';
}

var linkedImg = document.getElementById('linkedIn');
linkedImg.onmouseover = function() {
    linkedImg.style.width = '15%';
    linkedImg.style.height = '15%';
}

linkedImg.onmouseout = function() {
    linkedImg.style.height = '8%';
    linkedImg.style.width = '8%';
    
}

var $eyeOpen = $('#openeye');
$eyeOpen.click(function() {
    $('#aboutNav').toggle();
    $('#projectNav').toggle();
    $('#contactNav').toggle();
    $('#openeye').toggle();
    $('#closedeye').toggle();
})

$(document).ready(function() {
    $('#openeye').toggle();
    var $myVar = $('#closedeye');
    $myVar.click(function() {
    $('#aboutNav').toggle();
    $('#projectNav').toggle();
    $('#contactNav').toggle();
    $('#openeye').toggle();
    $('#closedeye').toggle();


});
})

// var $myVar = $('#closedeye');
// $myVar.click(function() {
//     $('#aboutNav').toggle();
//     $('#projectNav').toggle();
//     $('#contactNav').toggle();
//     $('#openeye').toggle();

// });