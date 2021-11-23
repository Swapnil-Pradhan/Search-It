function uptodate(){
var update = document.getElementById("update")
if(update.innerHTML!=2.1){
document.getElementById("updatebg").style.display="flex";
document.getElementById("updatebg").style.opacity="1";
document.getElementById("version").style.innerHTML+=")"
document.getElementById("line1").innerHTML="";
document.getElementById("line2").innerHTML="";
document.getElementById("line3").innerHTML="";
}
}
