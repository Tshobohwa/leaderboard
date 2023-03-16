export const refrechBtn = document.querySelector('.refrech-btn');
export const scoreList = document.querySelector('.score-list');
export const nameInput = document.querySelector('.name-input');
export const scoreInput = document.querySelector('.score-input');
export const submitBtn = document.querySelector('.submit-btn');
export const postErrorContainer = document.querySelector('.post-error');

export const renderScores = (scores) => {
  scoreList.innerHTML = '';
  if (scores.length) {
    scoreList.style.border = 'solid #000000 2px';
    scores.forEach((score) => {
      scoreList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="score-list__element">${score.user}: ${score.score}</li>
        `,
      );
    });
  } else {
    scoreList.style.border = 'none';
  }
};

export const throwGetError = (err) => {
  scoreList.innerHTML = err;
};

export const throwPostError = (err) => {
  postErrorContainer.innerHTML = err;
};
