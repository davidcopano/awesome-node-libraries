const franc = require('franc');

const texts = [
  'Alle menslike wesens word vry',
  'এটি একটি ভাষা একক IBM স্ক্রিপ্ট',
  'Alle menneske er fødde til fridom',
  '',
  'the'
];

for(let text of texts) {
  console.log({
    text,
    lang: franc(text)
  });
}