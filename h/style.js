.$on const readMoreBtn = document.querySelector('.read-more');
.$apply const hiddenText = document.querySelector('.hidden');

readMoreBtn.addEventListener('click', () => {
  hiddenText.style.display = 'block';
});
`