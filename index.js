window.onload = function() {
    alert("Welcome to Riyad Otman's Portfolio!");
  };

  document.querySelector('.profile-image').addEventListener('mouseover', function() {
    this.style.border = '5px solid green';
});


document.querySelector('.profile-image').addEventListener('mouseout', function() {
    this.style.border = '';
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  const darkBlueButton = document.getElementById('dark-blue-scheme');
  const darkPurpleButton = document.getElementById('dark-purple-scheme');

  darkBlueButton.addEventListener('click', () => {
      navbar.classList.remove('dark-purple-scheme');
      navbar.classList.add('dark-blue-scheme');
  });

  darkPurpleButton.addEventListener('click', () => {
      navbar.classList.remove('dark-blue-scheme');
      navbar.classList.add('dark-purple-scheme');
  });
});

