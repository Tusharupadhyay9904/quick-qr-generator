function generateQR() {
const text = document.getElementById("text").value;
const qr = document.getElementById("qr");

qr.innerHTML = "";

if (!text) {
alert("Enter text first");
return;
}

new QRCode(qr,{
text:text,
width:220,
height:220
});
}