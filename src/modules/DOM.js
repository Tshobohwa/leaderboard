export const refrechBtn = document.querySelector('.refrech-btn');
export const scoreList = document.querySelector('.score-list');
export const nameInput = document.querySelector('.name-input');
export const scoreInput = document.querySelector('.score-input');
export const submitBtn = document.querySelector('.submit-btn');

export const renderScores = (scores) => {
  scoreList.innerHTML = '';
  if (scores) {
    scoreList.style.border = 'solid #000000 2px';
    scores.forEach((score) => {
      scoreList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="score-list__element">${score.name}: ${score.score}</li>
        `,
      );
    });
  } else {
    scoreList.style.border = 'none';
  }
};
