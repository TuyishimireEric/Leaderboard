import { getPlayer } from './api.js';

const clearFields = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

const showPlayer = async () => {
  const players = await getPlayer();
  players.result.sort((a, b) => b.score - a.score);
  const list = document.querySelector('.Leaderboard');
  players.result.forEach((player) => {
    const addedplayer = document.createElement('tr');
    addedplayer.innerHTML = `
      <td class="cols">${player.user}: ${player.score}</td>
      `;
    list.appendChild(addedplayer);
  });
};

export { showPlayer, clearFields };