const playerName = document.querySelector('#name');
const playerScore = document.querySelector('#score');

const savePlayer = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pTzTm3TDwEYW51RypQds/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: playerName.value,
      score: playerScore.value,
    }),
  });
  const players = await response.json();
  return players;
};

const getPlayer = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pTzTm3TDwEYW51RypQds/scores/');
  const players = await response.json();
  return players;
};

export { savePlayer, getPlayer };