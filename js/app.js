const prevButton = document.querySelectorAll('button')[0];
const nextButton = document.querySelectorAll('button')[1];
const circleOutline = document.querySelectorAll('.outline');
const completeLine = document.querySelector('.complete-line');
let step = 0;

nextButton.addEventListener('click', () => {
  if (step === 3) return;
  step++;
  prevButton.disabled = false;
  completeLine.style.width = `${step * 33}%`
  circleOutline.forEach((circle, index) => {
    if (index <= step) {
      circle.classList.add('complete');
    }
    if (step === 3) {
      nextButton.disabled = true;
    }
  });
});

prevButton.addEventListener('click', () => {
  if (step === 0) return;
  step--;
  nextButton.disabled = false;
  completeLine.style.width = `${step * 33}%`
  circleOutline.forEach((circle, index) => {
    if (index > step) {
      circle.classList.remove('complete');
    }
    if (step !== 0) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  });
});
