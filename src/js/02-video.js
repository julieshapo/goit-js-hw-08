import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000))

function onPlayerTimeUpdate(evt) {
    console.log(evt.seconds)
    localStorage.setItem("videoplayer-current-time", evt.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);