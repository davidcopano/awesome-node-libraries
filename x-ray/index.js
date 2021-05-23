const xray = require('x-ray');
const x = xray();

x('https://blog.ycombinator.com/', '.post', [
  {
    title: 'h1 a',
    link: '.article-title@href'
  }
])
  .paginate('.nav-previous a@href')
  .limit(3)
  .write('results.json');
