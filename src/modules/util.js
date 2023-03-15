import { nameInput, renderScores, scoreInput } from './DOM.js';

const scores = [];

export const submitScore = () => {
  scores.push({
    name: nameInput.value,
    score: scoreInput.value,
  });
  renderScores(scores);
  nameInput.value = '';
  scoreInput.value = '';
};

export const refrechScoretable = () => {
  renderScores();
};
