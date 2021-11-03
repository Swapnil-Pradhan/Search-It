if ('serviceWorker' in navigator){
navigator.serviceWorker
.register('Cache.js')
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
e.preventDefault();
deferredPrompt = e;
deferredPrompt.prompt();
deferredPrompt.userChoice.then((choiceResult) => {
deferredPrompt = null;
});
});

function m(){
var speechtotext = new webkitSpeechRecognition();
speechtotext.start();
speechtotext.onstart= function(){
document.getElementById("type").placeholder="Listening...";
setTimeout(()=>{
document.getElementById("type").placeholder="Go ahead...";
},999)
}
speechtotext.onend= function(){
document.getElementById("type").placeholder="Didn't get that :(";
}
speechtotext.onspeechend= function(){
document.getElementById("type").placeholder="Processing...";
}
speechtotext.onresult= function(event){
document.getElementById("type").value+=event.results[0][0].transcript;
}
speechtotext.onerror= function(){
if (confirm("Give access to your mic to continue.\n\rWe won't upload your audio to anywhere.") == true){
m();
document.getElementById("type").placeholder="Click on mic";
}
else{
document.getElementById("type").placeholder="Allow mic access to continue!";
}
}
}

function mn(){
var speechtotext = new webkitSpeechRecognition();
speechtotext.start();
speechtotext.onstart= function(){
document.getElementById("data").placeholder="Listening...";
setTimeout(()=>{
document.getElementById("data").placeholder="Go ahead...";
},999)
}
speechtotext.onend= function(){
document.getElementById("data").placeholder="Didn't get that :(";
}
speechtotext.onspeechend= function(){
document.getElementById("data").placeholder="Processing...";
}
speechtotext.onresult= function(event){
document.getElementById("data").value+=event.results[0][0].transcript;
}
speechtotext.onerror= function(){
if (confirm("Give access to your mic to continue.\n\rWe won't upload your audio to anywhere.") == true){
m();
document.getElementById("data").placeholder="Click on mic";
}
else{
document.getElementById("data").placeholder="Allow mic access to continue!";
}
}
}

function x(){
document.getElementById("st").style.fontSize="0";
document.getElementById("nd").style.fontSize="0";
document.getElementById("xnm").style.width="0";
document.getElementById("type").style.width="800px";
document.getElementById('type').value = '';
document.getElementById("wrappe").style.width="96%";
document.getElementById("wrappe").style.opacity="1";
document.getElementById("wrappe").style.zIndex="1";
document.getElementById("wrappe").style.top="16%";
document.getElementById("hr").style.opacity="1";
document.getElementById("center").style.top="36%";
document.getElementById("center").style.opacity="1";
document.getElementById("center").style.zIndex="1";
document.getElementById("svg").style.display="flex";
document.getElementById("ground").style.display="flex";
document.getElementById('type').placeholder = 'Search with your fingertips...';
}

function c(){
document.getElementById("xnm").style.width="99px";
document.getElementById("st").style.fontSize="432%";
document.getElementById("nd").style.fontSize="300%";
document.getElementById("type").style.width="725px";
document.getElementById("wrappe").style.opacity="0";
document.getElementById("wrappe").style.zIndex="-1";
document.getElementById("wrappe").style.top="20px";
document.getElementById("hr").style.opacity="0";
document.getElementById("center").style.top="20px";
document.getElementById("center").style.opacity="0";
document.getElementById("center").style.zIndex="-1";
document.getElementById("svg").style.display="none";
document.getElementById("ground").style.display="none";
document.getElementById("type").placeholder = 'Try keyboard voice typing...';
}

function xo(){
document.getElementById("typ").style.marginLeft="81px";
document.getElementById("typ").style.width="720px";
document.getElementById("typ").style.borderRadius="0 99px 99px 0";
document.getElementById("https").style.marginLeft="90px";
document.getElementById("https").style.height="75px";
document.getElementById("https").style.zIndex="2";
document.getElementById("show").style.display="flex";
document.getElementById("hide").style.display="none";
document.getElementById("wrappe").style.width="100%";
document.getElementById("wrappe").style.margin="0";
document.getElementById("wrappe").style.left="0";
document.getElementById("wrappe").style.top="0";
document.getElementById("wrapper").style.opacity="0";
document.getElementById("wrapper").style.top="-5%";
document.getElementById("searchi").style.height="90px";
document.getElementById("searchi").style.padding="0";
document.getElementById("center").style.top="-5%";
document.getElementById("center").style.opacity="0";
document.getElementById("center").style.zIndex="-1";
document.getElementById("z").style.height="75px";
document.getElementById("z").style.marginLeft="7px";
document.getElementById("z").style.width="75px";
document.getElementById("xx").style.marginRight="7px";
document.getElementById("xx").style.height="75px";
document.getElementById("xx").style.width="75px";
document.getElementById("clea").style.fontSize="400%";
document.getElementById("hr").style.opacity="0";
document.getElementById("frame").style.opacity="1";
document.getElementById("preview").style.height="50px";
document.getElementById("preview").style.opacity="1";
document.getElementById("typ").style.height="75px";
document.getElementById("typ").placeholder="";
document.getElementById("svg").style.display="none";
document.getElementById("ground").style.display="none";
}

function xx(){
document.getElementById("typ").style.borderRadius="99px";
document.getElementById("typ").style.marginLeft="0";
document.getElementById("typ").style.width="800px";
document.getElementById("xx").style.width="0px";
document.getElementById("clea").style.fontSize="0px";
document.getElementById("typ").value="";
document.getElementById("wrapper").style.opacity="1";
document.getElementById("wrapper").style.zIndex="1";
document.getElementById("wrappe").style.top="16%";
document.getElementById("wrappe").style.zIndex="1";
document.getElementById("hr").style.opacity="1";
document.getElementById("center").style.top="36%";
document.getElementById("center").style.opacity="1";
document.getElementById("center").style.zIndex="1";
document.getElementById("wrapper").style.opacity="1";
document.getElementById("wrapper").style.top="5%";
document.getElementById("searchi").style.padding="15px";
document.getElementById("searchi").style.height="100%";
document.getElementById("wrappe").style.width="96%";
document.getElementById("wrappe").style.margin="9px";
document.getElementById("searchi").style.marginLeft="9px";
document.getElementById("typ").style.height="99px";
document.getElementById("z").style.height="99px";
document.getElementById("z").style.marginLeft="0";
document.getElementById("z").style.width="99px";
document.getElementById("xx").style.marginRight="0";
document.getElementById("show").style.display="none";
document.getElementById("hide").style.display="none";
document.getElementById("frame").style.opacity="0";
document.getElementById("frame").style.height="0";
document.getElementById("https").style.marginLeft="115px";
document.getElementById("https").style.zIndex="-1";
document.getElementById("https").style.height="99px";
document.getElementById("iframe").src="";
document.getElementById("svg").style.display="flex";
document.getElementById("ground").style.display="flex";
document.getElementById("typ").placeholder="Type or paste a link...";
}

function donothing(){
document.getElementById("img").style.height="525px";
document.getElementById("img").style.opacity="1";
document.getElementById("anime").style.display="flex";
document.getElementById("svg").style.display="none";
document.getElementById("ground").style.display="none";
document.getElementById("datata").src="";
document.getElementById("xxx").style.width="99px";
document.getElementById("xxx").style.fontSize="";
document.getElementById("data").style.width="725px";
document.getElementById("datata").src="https://api.qrserver.com/v1/create-qr-code/?size=1080x1080&data="+document.getElementById("data").value;
document.getElementById("datata").alt = document.getElementById("data").value;
}

function hehe(){
document.getElementById("xxx").style.width="99px";
document.getElementById("clearr").style.fontSize="432%";
document.getElementById("ndm").style.fontSize="300%";
document.getElementById("data").style.width="725px";
document.getElementById("data").placeholder="Convert text to image...";
document.getElementById("wrappe").style.top="5%";
document.getElementById("wrappe").style.opacity="0";
document.getElementById("wrapper").style.opacity="0";
document.getElementById("hr").style.opacity="0";
document.getElementById("center").style.top="5%";
document.getElementById("img").style.marginLeft="0";
document.getElementById("svg").style.display="none";
document.getElementById("ground").style.display="none";
}

function xxx(){
document.getElementById("xxx").style.width="0";
document.getElementById("ndm").style.fontSize="0";
document.getElementById("clearr").style.fontSize="0";
document.getElementById("data").style.width="800px";
document.getElementById("data").placeholder="Text → QR Code...";
document.getElementById("wrappe").style.top="16%";
document.getElementById("wrappe").style.opacity="1";
document.getElementById("hr").style.opacity="1";
document.getElementById("center").style.top="36%";
document.getElementById("data").value="";
document.getElementById("img").style.height="0";
document.getElementById("img").style.opacity="0";
document.getElementById("img").style.marginLeft="0"
document.getElementById("anime").style.display="flex";
document.getElementById("datata").src="";
document.getElementById("datata").opacity="0";
document.getElementById("wrapper").style.opacity="1";
document.getElementById("svg").style.display="flex";
document.getElementById("ground").style.display="flex";
}

function hidi(){
document.getElementById("anime").style.display="none";
document.getElementById("datata").style.opacity="1";
navigator.vibrate(50);
document.getElementById("ting").play();
document.getElementById("img").style.height="550px";
}

function preon(){
document.getElementById("frame").style.height="90%";
document.getElementById("iframe").src = 'https://'+document.getElementById("typ").value;
document.getElementById("hide").style.display="flex";
document.getElementById("show").style.display="none";
}

function preoff(){
document.getElementById("frame").style.height="0";
document.getElementById("hide").style.display="none";
document.getElementById("show").style.display="flex";
}

function fulls(){
document.getElementById("fs").style.display = "flex";
document.getElementById("fs").style.opacity = "1";
document.getElementById("fs").style.background = "rgba(0, 0, 0, 0.5)";
document.getElementById("fi").src = "https://api.qrserver.com/v1/create-qr-code/?size=1080x1080&data="+document.getElementById("data").value;
document.getElementById("fi").alt = document.getElementById("data").value;
}

function none(){
document.getElementById("fs").style.display="none";
document.getElementById("fs").style.opacity="0";
document.getElementById("fs").style.background="transparent";
}

function neew(){
document.getElementById("typ").style.marginLeft="81px";
document.getElementById("typ").style.width="720px";
document.getElementById("typ").style.borderRadius="0 99px 99px 0";
document.getElementById("https").style.marginLeft="90px";
document.getElementById("https").style.height="75px";
document.getElementById("https").style.zIndex="2";
document.getElementById("show").style.display="flex";
document.getElementById("hide").style.display="none";
document.getElementById("wrappe").style.width="100%";
document.getElementById("wrappe").style.margin="0";
document.getElementById("wrappe").style.left="0";
document.getElementById("wrappe").style.top="0";
document.getElementById("wrapper").style.opacity="0";
document.getElementById("wrapper").style.top="-5%";
document.getElementById("searchi").style.height="90px";
document.getElementById("searchi").style.padding="0";
document.getElementById("center").style.top="-5%";
document.getElementById("center").style.opacity="0";
document.getElementById("center").style.zIndex="-1";
document.getElementById("z").style.height="75px";
document.getElementById("z").style.marginLeft="7px";
document.getElementById("z").style.width="75px";
document.getElementById("xx").style.marginRight="7px";
document.getElementById("xx").style.height="75px";
document.getElementById("xx").style.width="75px";
document.getElementById("clea").style.fontSize="400%";
document.getElementById("hr").style.opacity="0";
document.getElementById("frame").style.opacity="1";
document.getElementById("preview").style.height="50px";
document.getElementById("preview").style.opacity="1";
document.getElementById("typ").style.height="75px";
document.getElementById("typ").placeholder="";
document.getElementById("svg").style.display="none";
document.getElementById("ground").style.display="none";
let url = 'https://'+document.getElementById("typ").value;
window.open(url);
}

function wrong(){
navigator.vibrate(50);
setTimeout(()=>{
navigator.vibrate(50);
},99)
}

var acceleration = new Accelerometer({frequency: 60});
acceleration.start();
acceleration.addEventListener('reading',()=>{
window.scrollBy(acceleration.x/2, 0);
});
