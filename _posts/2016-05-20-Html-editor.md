---
layout: post
tytle: Html Editor
---

<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Js Tester</title>
<style>
html,body{
background:#b0b0b0;
color:#d0d0d0;
box-sizing:border-box;
text-align:center;
padding:0;
margin:0;
}

.iframe{
width:100%;
padding:0;
margin:0;
}
iframe{
width:100%;
height:22em;
padding:0;
margin:0;
border:none;
border-bottom:1px solid #ccc;
}
button{
background:#d0d0d0;
padding:4px 10px;
margin:0;
border:1px solid #777;
}
.note{
text-align:left;
padding:10px;
margin:0;
color:#0b0b0b;
}
.text{
position:sticky;
background:#0d0d0d;
left:0;top:0;
z-index:1;
padding:5px;
margin:0;
color:#d0d0d0;
}
.footer{
padding:4px;
margin:0;
color:#0b0b0b;
}
</style>
<script src="jquery.js"></script>
</head><body>

<label class="iframe">
<iframe id="view"></iframe>
<div class="note">
<button>copy</button> ~ jquery is on this page</div>
</label>

<textarea id="input" rows="10" cols="40" class="text">
&lt;style&gt;
body{padding:0;margin:0;color:red;}
&lt;/style&gt;

&lt;p&gt;Text Html&lt;/p&gt;

&lt;script&gt;
$(&quot;body&quot;).css(&apos;background&apos;,&apos;#a0b0b0&apos;);
&lt;/script&gt;
</textarea>
 <script>
var doc='<!DOCTYPE html><html lang="eb"><head>';
var meta='<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
var title='<script src="jquery.js"><\/script></head><body>';
var foot='</body></html>';
$("button").click(function(){
$("textarea").select();
document.execCommand('copy');});
$("#input").on("keyup", function(){
this.style.height = "auto";
this.style.height = this.scrollHeight + 10 + "px";
var value = doc+meta+title+$( this ).val()+foot ;
$("#view").attr("srcdoc",value);
}).trigger("keyup");
</script>
<div class="footer"><h4>&copy; AndiGo</h4></div>
</body>
</html>