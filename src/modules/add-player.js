const showPlayer = (player) => {
  const list = document.querySelector('.Leaderboard');
  const addedplayer = document.createElement('tr');
  addedplayer.innerHTML = `
      <td class="cols1">${player.name}: ${player.score}</td>
      `;
  list.appendChild(addedplayer);
};

const clearFields = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

export { showPlayer, clearFields };
