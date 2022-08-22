import { getPlayer } from './api.js';

const clearFields = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

const showPlayer = async () => {
  const players = await getPlayer();
  const position = 1;
  players.result.sort((a, b) => b.score - a.score);
  const list = document.querySelector('.Leaderboard');
  players.result.forEach((player) => {
    const addedplayer = document.createElement('tr');
    addedplayer.innerHTML = `
      <td class="cols">${position} ${player.user}: ${player.score}</td>
      `;
    list.appendChild(addedplayer);
    position += 1;
  });
};

export { showPlayer, clearFields };
