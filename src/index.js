import './style.css';
import { showPlayer, clearFields } from './modules/add-player.js';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const player = new Player(name, score);
  showPlayer(player);
  clearFields();
});
