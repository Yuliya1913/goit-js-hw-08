import Player from '@vimeo/player';

console.log(Player);


const TIME_KEY = "videoplayer-current-time"

    const iframe = document.querySelector('iframe');
const player = new Player(iframe); 
    
// const timeEl = localStorage.setItem(TIME_KEY, event.second);
console.log(timeEl)

player.on('play', function (event) {
    const timeEl = localStorage.setItem(TIME_KEY, event.seconds);
        console.log(timeEl)
        console.log('played the video!')
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title)
    });


// console.log(Player);