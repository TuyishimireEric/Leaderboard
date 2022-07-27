import './style.css';
import { showPlayer, clearFields } from './modules/add-player.js';
import { savePlayer } from './modules/api.js';

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  savePlayer();
  clearFields();
});

document.addEventListener('DOMContentLoaded', showPlayer);
