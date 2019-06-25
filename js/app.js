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
var $eye1 = $('#tinyOpenEye1');
$eye1.click(function(){
    $('#fortuneDescription').toggle();
    $('#tinyClosedEye1').toggle();
    $('#tinyOpenEye1').toggle();
})

var $eye2 = $('#tinyOpenEye2');
$eye2.click(function(){
    $('#shelterDescription').toggle();
    $('#tinyClosedEye2').toggle();
    $('#tinyOpenEye2').toggle();
})

var $eye3 = $('#tinyOpenEye3');
$eye3.click(function(){
    $('#amokDescription').toggle();
    $('#tinyClosedEye3').toggle();
    $('#tinyOpenEye3').toggle();
})

var $eye4 = $('#tinyClosedEye1');
$eye4.click(function(){
    $('#fortuneDescription').toggle();
    $('#tinyOpenEye1').toggle();
    $('#tinyClosedEye1').toggle();
})

var $eye5 = $('#tinyClosedEye2');
$eye5.click(function(){
    $('#shelterDescription').toggle();
    $('#tinyOpenEye2').toggle();
    $('#tinyClosedEye2').toggle();
})

var $eye6 = $('#tinyClosedEye3');
$eye6.click(function(){
    $('#amokDescription').toggle();
    $('#tinyOpenEye3').toggle();
    $('#tinyClosedEye3').toggle();
})

var $profilePic = $('#profilePic');
$profilePic.mouseover(function changeImg() {
    $('#skeletonImg').toggle();
    $('#profilePic').toggle();
})
var $profilePic2 = $('#skeletonImg');
$profilePic2.mouseout(function imgChangeFunction() {
    $('#skeletonImg').toggle();
    $('#profilePic').toggle();
    
    
})

var $profilePic3 = $('#skeletonImg');
$profilePic3.click(function imgChangeFunction() {
    $('#skeletonImg').toggle();
    $('#profilePic').toggle();
    
    
})




$(document).ready(function() {
    $('#skeletonImg').toggle();
    $('#openeye').toggle();
    $('#tinyClosedEye1').toggle();
    $('#tinyClosedEye2').toggle();
    $('#tinyClosedEye3').toggle();
    $('#fortuneDescription').toggle();
    $('#shelterDescription').toggle();
    $('#amokDescription').toggle();
    var $myVar = $('#closedeye');
    $myVar.click(function() {
    $('#aboutNav').toggle();
    $('#projectNav').toggle();
    $('#contactNav').toggle();
    $('#openeye').toggle();
    $('#closedeye').toggle();


});
})
document.getElementById('modalButton').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "none";
});
// var $myVar = $('#closedeye');
// $myVar.click(function() {
//     $('#aboutNav').toggle();
//     $('#projectNav').toggle();
//     $('#contactNav').toggle();
//     $('#openeye').toggle();

// });