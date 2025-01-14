<!DOCTYPE html><html lang="en">
<head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<title>Js Editor</title>
<link rel="icon" href="/favicon.ico">
<style>
:root,html,body{margin:0;padding:0;background:silver;
box-sizing:border-box;width:100%;height:100%;
}
#res{margin:0;padding:0;background:silver;border:0;
box-sizing:border-box;width:100%;height:100%;
}
#inp{display:flex;box-sizing:border-box;position:fixed;left:0;bottom:0;
width:100%;height:35%;background:;
border:1px solid #000;
transition:height 0.5s;
transition-timing-function: ease;
}
textarea::-webkit-resizer{  
display:none;
}
.btnsf:before{
content:url('fedit.png');
}
.btnsf{z-index:9;
box-sizing:border-box;position:fixed;top:10%;right:4px;font-size:36px;opacity:0.7;
padding:5px;margin:0;}
#sf:checked~#inp{
height:100%;
}

.btnsh:before{
content:url('edit.png');
}
.btnsh{z-index:9;
box-sizing:border-box;position:fixed;top:25%;right:4px;font-size:36px;opacity:0.7;
padding:5px;margin:0;}
#sh:checked~#inp{
height:0px;
}
</style>
<script type="text/javascript" src="./jquery.js"></script>
</head><body>
<div id="anim"></div>

<label for="sh"class="btnsh"></label>
<input style="position:fixed;left:0;bottom:0;display:none" id="sh" type="checkbox">
<label for="sf"class="btnsf"></label>
<input style="position:fixed;left:0;bottom:0;display:none" id="sf" type="checkbox">

<iframe id="res"></iframe>
<iframe id="inp" onload="on()"></iframe>

<textarea id="hide" cols="0" rows="0"style="display:none">
&lt;!DOCTYPE html&gt;&lt;meta charset=&quot;UTF-8&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no&quot;&gt;
&lt;title&gt;Js Editor&lt;/title&gt;&lt;style&gt;
:root{box-sizing:border-box;
width:1100px;height:100%;margin:0;padding:0;
background:#f0f0f0;
}
html{box-sizing:border-box;display:flex;
width:100%;height:100%;margin:0;padding:0;
}
body{display:flex;box-sizing:border-box;
width:100%;height:100%;margin:0;padding:0;
box-sizing:border-box;
}
textarea{display:flex;box-sizing:border-box;
padding:10px;margin:0;width:35%;height:100%;
background:#303030;color:coral;
font-family: Arial, Helvetica, sans-serif;
border:8px solid #222;
resizable:true;
outline: 1px solid #000;
}
::-webkit-resizer{display:10px;
}
&lt;/style&gt;&lt;/head&gt;&lt;body&gt;
&lt;textarea id=&quot;html&quot;&gt;
&lt;h1&gt;HTML / CSS / JS  EDITOR&lt;/h1&gt;
&lt;p&gt;Html Editor With Slide Textarea&lt;/p&gt;
&lt;/textarea&gt;&lt;textarea id=&quot;css&quot;&gt;
p{
color:#000;
}
h1{
margin:0;padding:0;
animation-name:anim;
animation-duration: 5s;
animation-iteration-count:infinite;
}
@keyframes anim{
from{color:red;}
35%{color:green;}
70%{color:blue;}
to{color:red;}
}
&lt;/textarea&gt;
&lt;textarea id=&quot;js&quot;&gt;
$("h1").on( "animationiteration", function(){
var color=$(this).css("color");
$("p").text(color);
});
&lt;/textarea&gt;
&lt;/body&gt;&lt;/html&gt;
</textarea>

<script>
$("#inp").attr("srcdoc",$("#hide").text());
function on(){
var html=$("#inp").contents().find("#html")[0];
var css=$("#inp").contents().find("#css")[0];
var js=$("#inp").contents().find("#js")[0];
var d1='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">';
var d2='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"><style type="text/css">';
var d3='<\/style>';
var d4='<title>result title<\/title><\/head><body>';
var d5='<script  src="./jquery.js"><\/script><script>';
var d6='<\/script><\/body><\/html>';
function run(){
$("#res")[0].srcdoc=d1+d2+css.value+d3+d4+html.value+d5+js.value+d6;
};
$(html).on("keyup",run);
$(css).on("keyup",run);
$(js).on("keyup",run);
run.call();
}
window.onbeforeunload = function(event){
return confirm("Confirm refresh");
};
</script>
<script type="text/javascript" src="./urln.js"></script>
</body>
</html>
