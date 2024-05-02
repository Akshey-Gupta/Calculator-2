document.addEventListener('DOMContentLoaded', function () {
    (function () {
      var screen = document.querySelector('.screen');
      var buttons = document.querySelectorAll('button:not([data-equals]):not([data-delete])');
      var clear = document.querySelector('[data-all-clear]');
      var equal = document.querySelector('[data-equals]');
      var Ddelete = document.querySelector('[data-delete]');
  
      buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
          let value = event.target.dataset.number;
          console.log(value); //if the value is being captured correctly
          screen.value += value;
        });
      });
  
      equal.addEventListener('click', function () {
        calculateResult();
      });
  
      document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault(); // Prevent auto clearing which was default
          calculateResult();
        }
      });
  
      clear.addEventListener('click', function () {
        screen.value = '';
      });
  
      Ddelete.addEventListener('click', function () {
        screen.value = screen.value.slice(0, -1); // Remove the last character
      });
  
      function calculateResult() {
        if (screen.value === '') {
          screen.value = '';
        } else {
          try {
            const answer = eval(screen.value);
            screen.value = answer;
          } catch (error) {
            screen.value = 'Error!!!';
            alert('ERROR!!!');
          }
        }
      }
    })();
  
    console.log("Hello, this is a test.");
  });
  