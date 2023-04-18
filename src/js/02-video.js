import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function fillDataLocalStorage(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(fillDataLocalStorage, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

console.log(player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0));
