import './index.css';
import { refrechBtn, submitBtn } from './modules/DOM.js';
import { submitScore, refrechScoretable } from './modules/util.js';

refrechScoretable();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore();
});

refrechBtn.addEventListener('click', refrechScoretable);
