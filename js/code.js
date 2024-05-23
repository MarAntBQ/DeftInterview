let btn = document.getElementById('btn');
let userInput = document.getElementById('userInput');
let output = document.getElementById('output');

btn.addEventListener('click', ()=> {
  let userResponse = userInput.value;
  if (userResponse == '') {
    output.innerHTML = `Please don't leave the input empty`;
  } else if ( userResponse%3==0 && userResponse%5==0 ) {
    output.innerHTML = `Fizz Buzz`;
  } else if ( userResponse%3==0 ) {
    output.innerHTML = `Fizz`;
  } else if ( userResponse%5==0 ) {
    output.innerHTML = `Buzz`;
  } else {
    output.innerHTML = `Not valid input`;
  }
});