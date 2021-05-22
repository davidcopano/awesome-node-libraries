var WebTorrent = require('webtorrent');

var client = new WebTorrent();
var torrentUri = 'https://webtorrent.io/torrents/big-buck-bunny.torrent';

client.add(torrentUri, function (torrent) {
  console.log(`Descargando el torrent '${torrent.name}'...`)

  torrent.on('download', (bytes) => {
    console.log(`Progreso: ${(torrent.progress * 100).toFixed(2)}`);

    if(torrent.progress === 1) {
      console.log('Terminado!');
      console.log(torrent.path);
    }
  })
});