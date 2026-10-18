import { playlistArr } from './playlist.js'


const playlistHtml = playlistArr.map(function (track) {
    return `
    <section class="Card">
          <div class="Card-Start">
            <img src="images/${track.albumArt}">
            </div>
            <div class="Card-mid">
            <h4 class="Card-artist">${track.title}</h4>
            <p class="Card-title">${track.artist}</p>
            </div>
            <div class="Card-end">
            <p class="Card-menu">...</p>
            </div>
        </section>
        `
    })

// for (let i = 0; i < playlistArr.length; i++) {
//     playlistHtml.push(


document.getElementById('container').innerHTML = playlistHtml