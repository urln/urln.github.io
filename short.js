var $dq = document.querySelector.bind(document);
var $id = document.getElementById.bind(document);
var $class = document.getElementsByClassName.bind(document);
var $new = document.createElement.bind(document);

var $on = function(element, event, handler){
element.addEventListener(event, handler);};
var $setHtml = (html) => { document.body.innerHTML = html; };
$dq("body").style.background="lightblue";