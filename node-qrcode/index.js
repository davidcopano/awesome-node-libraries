const QRCode = require('qrcode');

// print base64 image url

// QRCode.toDataURL('I am a pony!', (err, url) => {
//   console.log(url);
// });

// print generated qr code in terminal

QRCode.toString('I am a pony!', { type: 'terminal' }, (err, url) => {
  console.log(url)
});