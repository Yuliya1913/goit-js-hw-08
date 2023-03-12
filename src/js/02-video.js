import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);
console.log(throttle);
// сохраняем ключ для методов setItem и getItem localStorage в постоянной переменной
const TIME_KEY = "videoplayer-current-time"

// используем библиотеку Vimeo плеера.

const iframe = document.querySelector('iframe');
const player = new Player(iframe); 

    //  Будем слушать событие timeupdate - обновления времени
    player.on('timeupdate', throttle((event) => {
    // console.log(event);

    // сохраним в localStorage время нажания на паузу
    localStorage.setItem(TIME_KEY, event.seconds);
    }, 1000));

    // достанем значение времени остановки плэйера из localStorage с помощью метода getItem
    const timePause = localStorage.getItem(TIME_KEY);
    console.log(timePause);

    // если значение в ключе есть
    if (timePause) {
 // применим его в методе setCurrentTime(установка текущей позиции воспроизведения)
    player.setCurrentTime(timePause);
}
   
    player.getVideoTitle().then(function(title) {
        console.log('title:', title)
    });
    
console.log(Player);