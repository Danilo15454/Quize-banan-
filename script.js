const answer = document.querySelector('.answer');
answer.addEventListener('click', () => {
    answer.classList.add('active');

    setTimeout(() => {
      answer.classList.remove('active');
    });
})