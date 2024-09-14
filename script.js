// game script //
// developed by nour yahyaoui //
// https://github.com/nour-yahyaoui/quiz-game/ //

const root = document.getElementById('root');
root.style.boxShadow = "2px 2px 10px 2px gray"
root.style.marginTop = '100px'


// game function // 

function QuizGame() {
    let input = document.createElement('input');
    let h1 = document.createElement('h1');
    let help = document.createElement('P');
    let p = document.createElement('p');
    
    
    let random = Math.floor(Math.random() * 100);

    p.textContent = 'Enter a choice to start';
    p.style.color="black";

    help.textContent = '?';
    root.appendChild(help);
    help.style.marginRight = '80%';
    help.style.marginBottom = '-20px'
    help.style.border = '1px solid';
    help.style.width = "20px"
    help.style.height = "25px";
    help.style.background = "rgb(0, 100, 0)"
    help.style.borderRadius = '5px';
    help.style.color = 'white'
    help.addEventListener('click', helpWindow)

    input.placeholder = 'Enter a number';
    input.type = 'number';
    input.name = 'number';
    input.id = 'numb';

    h1.textContent = 'Quiz game!';

    root.appendChild(h1);

    root.appendChild(input);
    
    root.appendChild(p);
    
    input.addEventListener('input', () => {
        
        if (input.value == random) {
            p.textContent = 'thats great! the number is ' + random + ' lets play again!';
            p.style.color = 'green';
            input.readOnly = true;
            h1.textContent = 'good game man!!';
            h1.style.color = 'green';

            setTimeout(( )=> {
                window.location.reload();
            }, 3000)

         } else if (input.value.length === 0 ) {
                p.style.color="black";
                p.textContent = " Enter a choice"
         } else if ((input.value > 100)) {
                p.textContent = 'please enter a number between 0 and 100!'
                p.style.color = "red"
         } else if ((input.value > random) && ((input.value - random) > 10)) {
            p.textContent = "your choice is too big"
            p.style.color = "black"
         }
         else if ((input.value > random) && ((input.value - random) < 10)) {
            p.textContent = "your choice is big"
            p.style.color = "black"
         }
         else if ((input.value < random) && ((random - input.value) > 10)) {
            p.textContent = "your choice is too small"
            p.style.color = "black"
         }
         else if ((input.value < random) && ((random - input.value) < 10)) {
            p.textContent = "your choice is small"
            p.style.color = "black"
         }
          else if (input.value < 0) {
            p.textContent = 'Please enter a positive number!';
            p.style.color = 'red';
         }})
}

// end game function //

// game styles //

function QuizGameStyles() {
    let styles = document.createElement('style');
    styles.textContent = `
        body {
            background: rgba(250, 250, 250);
        }
        #root {
            border: solid 1px gray;
            padding: 10px;
            border-radius: 40px;
            background-color: white;
            max-width: 400px;
            text-align: center;
            margin: auto;
        }
        h1 {
            font-family: monospace;
            font-weight: bold;
            font-size: 40px;
            color: green;
            text-transform: uppercase;
        }
        input {
            max-width: 200px;
            height: 20px;
            border-radius: 10px;
            border: solid 1px gray;
            padding-left: 4px;
        }
        input:focus {
            outline: none;
            color: black;
        }
        p {
            text-align: center;
            font-weight: 600;
            color: gray;
            font-size:16px;
            position:relative;
        }
        a {
        font-weight: bold;
        color:black;
        }
    `;

    document.head.appendChild(styles);
}

//end game styles //

// help window //

function helpWindow() {
    root.style.display = 'none';
    let window = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = `
    Welcome player! This game is about a simple quiz game. What is a quiz? A quiz is a game where you try to answer a question or solve a problem. In this case, we'll think of a random number between 0 and 100, and you'll try to guess it. We'll help you by giving you some hints along the way.
    
    Here's how the game will work:

    * We'll think of a random number between 0 and 100.
* You'll make a guess by entering a number.
* We'll tell you if your guess is higher or lower than the number we're thinking of.
* You'll keep guessing until you correctly guess the number.

Ready to start? Go ahead and enter your first guess!`
;
    let x = document.createElement('p');
    x.textContent = 'X';
    x.style.marginRight = '80%';
    x.style.marginBottom = '-0px'
    x.style.border = '1px solid';
    x.style.width = "20px"
    x.style.height = "25px";
    x.style.background = "rgb(200, 0, 0)"
    x.style.borderRadius = '5px';
    x.style.color = 'white'

    const contact = document.createElement('a');
    contact.textContent = 'contact developer!'
    contact.style.textDecoration = "underline";
    contact.style.marginLeft= "50%"
    contact.href = "mailto:nourryahyaoui@gmail.com?subject=Feedback from your game";


    window.style.maxWidth = "800px";
    window.style.height = "auto";
    window.className = "wind";
    window.style.border = "1px solid";

    const style = document.createElement('style');

    window.style.boxShadow = "2px 2px 10px 2px "
        style.textContent = `
        .wind {
            border-radius: 30px;
            width: 90%;
            margin-left: 50%;
            transform: translate(-50%, 10%); 
            padding: 10px;
        }
        `;
        window.appendChild(x)
        x.addEventListener('click', () => {
            window.style.display = 'none';
            root.style.display = 'block';
        })
        window.appendChild(p)
        document.body.appendChild(window);
        document.head.appendChild(style);
        window.appendChild(contact)
    
}

// end help window //

//content //

QuizGameStyles();
QuizGame();
