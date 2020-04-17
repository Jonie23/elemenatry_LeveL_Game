
const min = 1;
const max = 5;
const min2 = 5;
const max2 = 9;

let correct = 0;
let wrong = 0;
   
  



function add() {
    for(i = 0; i < 5; i++){
        let numA = Math.floor(Math.random() * (+max - +min)) + +min;
        let numB = Math.floor(Math.random() * (+max - +min)) + +min;
        let numC = numA + numB;
        let answer = prompt('What is ' +numA+ ' + ' +numB+ ' ?', '');

        if (answer === '' || answer === null ){
            alert('Please type in a number');
         
        }
     
        else if (answer == numC) {
            correct++
            document.getElementById('score').innerHTML = correct;
            console.log(correct);
            alert('Congratulations!!, your answer is correct')
        }

        else {
            wrong++
            console.log(wrong);
            alert('Oops! ' +answer+ ' is incorrect. + \n ' + 'The correct answer is ' +numC+ ' .' )
        }
    }
}


//\|/^[A-Za-z]+$/

function subtract() {
    for(i = 0; i < 5; i++) {
        let numA = Math.floor(Math.random() * (+max2 - +min2)) + +min2;
        let numB = Math.floor(Math.random() * (+max - +min)) + +min;
        let numC = numA - numB;
        let answer = prompt('What is ' +numA+ '-' + numB+ ' ?', '');
      // console.log(numC);

      if (answer === '' || answer === null ){
            alert('Please type in a number')
        }

        else if (answer == numC) {
            correct++;
            document.getElementById('score').innerHTML = correct;
            alert('Congratulations!!. Your answer is correct');
        }

        else {
            wrong++;
            console.log(wrong);
            alert('Oops ' +answer+ ' is incorrect \n' + 'The correct answer is ' +numC+ ' .')
        }
    }
}



function multiply() {
    for (i = 0; i < 5; i++) {
        let numA = Math.floor(Math.random() * (+max - +min)) + +min
        let numB = Math.floor(Math.random() * (+max - +min)) + +min
        let numC = numA * numB;
        answer = prompt('What is ' + numA + ' x ' + numB + ' ?' );
        console.log(answer);

        if (answer === '' || answer === null ){
            alert('Please type in a number');
        }

        else if(answer == numC){
            alert('Congratulations. Your answer is right');
            correct++
            document.getElementById('score').innerHTML = correct;
            console.log(correct);
        }

        else {
            alert('Oops' +answer+ ' is incorrect.\n The right answer is ' +numC+ ' .');
            wrong++;
        }
    }
}
        
 

function totalScore(){
    document.getElementById('totalScore').innerHTML = ((correct/(correct+wrong)) * 100 + '%');
}
    