import {
  nameInput,
  postErrorContainer,
  renderScores,
  scoreInput,
  throwGetError,
  throwPostError,
} from './DOM.js';

const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0b3IROaa6TNhBfSLZFnF/scores';

export const submitScore = async () => {
  try {
    postErrorContainer.innerHTML = '';
    const response = await fetch(gameUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value,
      }),
    });
    if (!response.ok) throw new Error(`Enable to post your score (status: ${response.status})`);
    nameInput.value = '';
    scoreInput.value = '';
  } catch (err) {
    throwPostError(err.message);
  }
};

export const refrechScoretable = async () => {
  try {
    const response = await fetch(gameUrl);
    if (!response.ok) {
      throw new Error(
        `Enable to access your score table (status: ${response.status})`,
      );
    }
    const data = await response.json();
    const scores = data.result;
    if (!scores.length) throw new Error('The score table is empty');
    renderScores(scores);
  } catch (err) {
    throwGetError(err.message);
  }
};
