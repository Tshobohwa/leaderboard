import './index.css';
import { refrechBtn, renderScores, submitBtn } from './modules/DOM.js';
import { submitScore, scores, refrechScoretable } from './modules/util.js';

renderScores(scores);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore();
});

refrechBtn.addEventListener('click', refrechScoretable);
