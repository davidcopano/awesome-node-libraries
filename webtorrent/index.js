const WebTorrent = require('webtorrent');
const chalk = require('chalk');

const client = new WebTorrent();
const torrentUri = 'https://webtorrent.io/torrents/big-buck-bunny.torrent';

client.add(torrentUri, (torrent) => {
  console.log(chalk.blue(`Descargando el torrent '${torrent.name}'...`));

  torrent.on('download', (bytes) => {
    const progressPercentage = (torrent.progress * 100).toFixed(2);
    console.log(chalk.yellow(`Progreso: ${progressPercentage}%`));

    if(progressPercentage >= 100) {
      console.log(chalk.green(`Terminado! Se ha descargado en la siguiente carpeta: ${torrent.path}`));
      process.exit(1);
    }
  })
});