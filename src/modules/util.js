import { nameInput, renderScores, scoreInput } from './DOM.js';

export const scores = [];

export const submitScore = () => {
  scores.push({
    name: nameInput.value,
    score: scoreInput.value,
  });
  nameInput.value = '';
  scoreInput.value = '';
};

export const refrechScoretable = () => {
  renderScores(scores);
};
