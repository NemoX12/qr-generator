const qrText = document.getElementById('qr-text');
const qrGenerate = document.getElementById('qr-generate');
const qrCode = new QRCode(document.getElementById('qr-code'));

qrGenerate.addEventListener('click', () => {
  qrCode.makeCode(qrText.value);
});
