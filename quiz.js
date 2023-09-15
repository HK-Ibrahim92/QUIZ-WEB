


import { signOutUser, userscore, observeAuthState,result } from './authservice.js'

const startentrytest = document.querySelector(".start-entry-test-btn");
const startquiz1 = document.querySelector('.start-quiz1-btn');
const quizPopup = document.getElementById('quiz-popup');
const startquiz2 = document.querySelector('.start-quiz2-btn');
const startquiz3 = document.querySelector(".start-quiz3-btn")


const signOutBtn = document.getElementById('signOutBtn');



let course = document.getElementById("course")
let quiznum = document.getElementById("quiznum")
let questions = document.getElementById("questions")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let nextbtn = document.getElementById("nextbtn")

let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")

let answer = document.getElementsByName("answer")

var finalscore1, finalscore2, finalscore3, finalscore4;


function answer1select() {
    nextbtn.disabled = false

}

answer1.addEventListener('click', answer1select)


function answer2select() {
    nextbtn.disabled = false

}

answer2.addEventListener('click', answer2select)

function answer3select() {
    nextbtn.disabled = false

}

answer3.addEventListener('click', answer3select)
let sec;


function checkentry() {

    function next1() {

        course.innerText = "computer Basics"
        quiznum.innerText = "Entry Test"

        for (var i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                var selected = computerBasics[index - 1][`option${answer[i].value}`]
                var correctoption = computerBasics[index - 1].correctOption;
                if (selected == correctoption) {
                    score++
}
            }
            answer[i].checked = false
            nextbtn.disabled = true
        }
        if (index < computerBasics.length) {
            questions.innerText = "Q." + q + computerBasics[index].question

            option1.innerText = computerBasics[index].option1
            option2.innerText = computerBasics[index].option2
            option3.innerText = computerBasics[index].option3

            index++
            q++
        } else {
            finalscore1 = Math.round(score * 100 / computerBasics.length)
            index = 0;
            startentrytest.disabled = true
            startentrytest.style.background = 'red'
            userscore(finalscore1)
            q = 1
           
            Swal.fire({
                icon: 'success',
                title: 'Entry Quiz completed!',
                text: `Your score is: ${finalscore1}% `,
            }).then((result) => {
                if (result.isConfirmed) {
                    if (result.isConfirmed) {
                        setTimeout(() => {
                         location.reload();
                        }, 2000);   
                }}
            });
            quizPopup.style.display = 'none';
        }
        function startTimer() {
            sec=30
            timer.innerHTML = `00:${sec}`;
            
            intervalId = setInterval(function () {
              timer.innerHTML = `00:${sec}`;
              sec--;
              
              if (sec === 0) {
                  // next2();
                  clearInterval(intervalId);
              }
            }, 1000);
          }
         
          startTimer();
    }
    next1()
    nextbtn.addEventListener('click', next1)
}

let solution = true


function check1() {
    let index=0,q=1,score=0,sec=30

    function next2() {
        // console.log("sec:"+sec,"index:"+index,"q:"+q)
        course.innerText = "Html"
        quiznum.innerText = "Quiz 1"
        let intervalId; // Declare a variable to store the interval ID

        function startTimer() {
          sec=30
          timer.innerHTML = `00:${sec}`;
          
          intervalId = setInterval(function () {
            timer.innerHTML = `00:${sec}`;
            sec--;
            
            if (sec === 0) {
                // next2();
                clearInterval(intervalId);
            }
          }, 1000);
        }
       
        startTimer(); 
        
        for (var i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                var selected = html[index - 1][`option${answer[i].value}`]
                var correctoption = html[index - 1].correctOption;

                if (selected == correctoption) {
                    score++
                    console.log("score:"+score)
} }
            answer[i].checked = false
            nextbtn.disabled = true
        }
        
        console.log(index)

        if (index < html.length) {
            
            questions.innerText = "Q." + q + html[index].question
            option1.innerText = html[index].option1
            option2.innerText = html[index].option2
            option3.innerText = html[index].option3
            index++
            q++
        } else {
            
            finalscore2 = Math.round(score * 100 / html.length)
            userscore("Html", finalscore2)
            index=0
            q=1
           
            
            startquiz1.disabled = true
                  startquiz1.style.background = 'red'
                  Swal.fire({
                    icon: 'success',
                    title: 'HTML Quiz completed!',
                    text: `Your score is: ${finalscore2}% `,
                }).then((result) => {
                
                    if (result.isConfirmed) {
                       setTimeout(() => {
                        location.reload();
                       }, 2000);
                        
                    }
                });
                
                quizPopup.style.display = 'none';
            
        }  }
    nextbtn.addEventListener('click', next2)
    if (solution) {
        next2()
        solution = false

    }
}
let functioncheck2=true;

function check2() {
    
    let index=0,q=1,score=0,sec=30
    function next3() {
        for (var i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                var selected = css[index - 1][`option${answer[i].value}`]
                var correctoption = css[index - 1].correctOption;

                if (selected == correctoption) {
                    score++
                }
            }
            answer[i].checked = false
            nextbtn.disabled = true
        }
        if (index < css.length) {
            course.innerText = "CSS"
            quiznum.innerText = "Quiz 2"
    
            questions.innerText = "Q." + q + css[index].question

            option1.innerText = css[index].option1
            option2.innerText = css[index].option2
            option3.innerText = css[index].option3
      
            index++
            q++
        } else {
            
            finalscore3 = Math.round(score * 100 / css.length)
            userscore("CSS", finalscore3)            
            startquiz2.disabled = true
            startquiz2.style.background = 'red'
            quizPopup.style.display = 'none';
            index = 0
            q = 1

            Swal.fire({
                icon: 'success',
                title: 'CSS Quiz completed!',
                text: `Your score is: ${finalscore3}% `,
            }).then((result) => {
                
                if (result.isConfirmed) {
                    setTimeout(() => {
                        location.reload();
                       }, 2000);
                }

            });
           
        }
        
        let intervalId; 

        function startTimer() {
           sec=30
          timer.innerHTML = `00:${sec}`;
          
          intervalId = setInterval(function () {
            timer.innerHTML = `00:${sec}`;
            sec--;
            
            if (sec === 0) {
              clearInterval(intervalId); // Stop the interval when sec reaches 0
             
            //   next3();
            }
          }, 1000);
        }
        startTimer();
    }
if(functioncheck2){
    next3()
    functioncheck2=false;
}
    
    nextbtn.addEventListener('click',next3)
}
function check3() {
    
    let index=0,q=1,score=0,sec=30
function next4(){
    let intervalId; // Declare a variable to store the interval ID

    function startTimer() {
      let sec = 60;
      timer.innerHTML = `00:${sec}`;
      
      intervalId = setInterval(function () {
        timer.innerHTML = `00:${sec}`;
        sec--;
        
        if (sec === 0) {
          clearInterval(intervalId); // Stop the interval when sec reaches 0
        }
      }, 1000);
    }
    startTimer();

    course.innerText = "Java Script"
    quiznum.innerText = "Quiz 3"

    
        sec = 60

        for (var i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                var selected = js[index - 1][`option${answer[i].value}`]
                var correctoption = js[index - 1].correctOption;

                if (selected == correctoption) {
                    score++

                }
            }
            answer[i].checked = false
            nextbtn.disabled = true
        }
    if (index < js.length) {
        questions.innerText = "Q." + q + js[index].question

        option1.innerText = js[index].option1
        option2.innerText = js[index].option2
        option3.innerText = js[index].option3

       
            index++
            q++

        
    } else {
        finalscore4 = Math.round(score * 100 / js.length)
        userscore(finalscore4)
        index = 0
        
        startquiz3.disabled = true
        startquiz3.style.background = 'red'

        q = 1
        quizPopup.style.display = 'none';
        Swal.fire({
            icon: 'success',
            title: 'JavaScript Quiz completed!',
            text: `Your score is: ${finalscore4}% `,
        }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    location.reload();
                   }, 1500);
                
            }
        });
  
       
    }
}
    next4()
    nextbtn.addEventListener('click', next4)

}

startentrytest.addEventListener('click', function () {
    quizPopup.style.display = 'flex';
    checkentry();
});


startquiz1.addEventListener('click', function () {
    quizPopup.style.display = 'flex';
    check1();

});


startquiz2.addEventListener('click', function () {
    quizPopup.style.display = 'flex';
    check2();
});

startquiz3.addEventListener('click', function () {
    quizPopup.style.display = 'flex';
    check3();
});


//==========LOG OUT ===============
signOutBtn.addEventListener('click', () => {
    // Display a SweetAlert confirmation dialog
    Swal.fire({
        title: 'Logout Confirmation',
        text: 'Are you sure you want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            // User clicked "Logout," so sign them out
            signOutUser()
                .then(() => {
                    // Logout successful
                    Swal.fire('Logged Out', 'You have been logged out successfully.', 'success');
                    window.location.href = 'index.html'
                })
                .catch((error) => {
                    // Handle logout error
                    console.error('Sign-out error:', error);
                });
        }
    });
});
const getresult=document.querySelector("#getresult")

getresult.addEventListener('click', result)

let html = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    }
    // {
    //     question: 'What is the correct HTML element for inserting a line break?',
    //     option1: '<linebreak>',
    //     option2: '<br>',
    //     option3: '<break>',
    //     correctOption: "<br>"
    // },
    // {
    //     question: 'What is the correct HTML for adding a background color?',
    //     option1: '<body bg="yellow">',
    //     option2: '<background>yellow</background>',
    //     option3: '<body style="background-color:yellow;">',
    //     correctOption: '<body style="background-color:yellow;">'
    // },
    // {
    //     question: 'Choose the correct HTML element to define important text:',
    //     option1: '<strong>',
    //     option2: '<b>',
    //     option3: '<i>',
    //     correctOption: '<strong>'
    // },
    // {
    //     question: 'Choose the correct HTML element to define emphasized text:',
    //     option1: '<italic>',
    //     option2: '<i>',
    //     option3: '<em>',
    //     correctOption: "<em>"
    // },

    // {
    //     question: 'Which character is used to indicate an end tag?',
    //     option1: '*',
    //     option2: '/',
    //     option3: '<',
    //     correctOption: "/"
    // },
    // {
    //     question: 'How can you open a link in a new tab/browser window?',
    //     option1: '<a href="url" target="new">',
    //     option2: '<a href="url" new>',
    //     option3: '<a href="url" target="_blank">',
    //     correctOption: '<a href="url" target="_blank">'
    // },
    // {
    //     question: 'Which of these elements are all <table> elements?',
    //     option1: '<table> <tr> <td>',
    //     option2: '<table> <head> <tfoot>',
    //     option3: '<table> <tr> <tt>',
    //     correctOption: "<table> <tr> <td>"
    // },
    // {
    //     question: 'Inline elements are normally displayed without starting a new line.',
    //     option1: 'True',
    //     option2: 'False',
    //     correctOption: "True"
    // },
    // {
    //     question: 'Choose the correct HTML element for the smallest heading:',
    //     option1: '<heading>',
    //     option2: '<h5>',
    //     option3: '<h6>',
    //     correctOption: "<h6>"
    // },
    // {
    //     question: "How can you make a numbered list?",
    //     option1: '<dl>',
    //     option2: '<ul>',
    //     option3: '<ol>',
    //     option4: '<list>',
    //     correctOption: "<ol>"
    // },
    // {
    //     question: 'How can you make a bulleted list?',
    //     option1: '<ol>',
    //     option2: '<list>',
    //     option3: '<ul>',
    //     option4: '<dl>',
    //     correctOption: "<ul>"
    // },
    // {
    //     question: 'What is the correct HTML for inserting an image?',
    //     option1: '<img alt="MyImage">image.gif</img>',
    //     option2: '<img href="image.gif" alt="MyImage">',
    //     option3: '<img src="image.gif" alt="MyImage">',
    //     option4: '<image src="image.gif" alt="MyImage">',
    //     correctOption: '<img src="image.gif" alt="MyImage">'
    // },
    // {
    //     question: 'What is the correct HTML for making a checkbox?',
    //     option1: '<iput type="check">',
    //     option2: '<check>',
    //     option3: '<checkbox>',
    //     option4: '<input type="checkbox">',
    //     correctOption: '<input type="checkbox">'
    // },
    // {
    //     question: "What is the correct HTML for making a text input field?",
    //     option1: '<input type="textfield">',
    //     option2: '<input type="text">',
    //     option3: '<textfield>',
    //     option4: '<textinput type="textfield">',
    //     correctOption: '<input type="text">'
    // },
    // {
    //     question: 'What is the correct HTML for making a drop-down list?',
    //     option1: '<input type="list">',
    //     option2: '<list>',
    //     option3: '<input type="dropdown">',
    //     option4: '<select>',
    //     correctOption: '<select>'
    // },
    // {
    //     question: 'What is the correct HTML for making a text area?',
    //     option1: '<input type="textbox">',
    //     option2: '<input type="textarea">',
    //     option3: '<textarea>',
    //     correctOption: '<textarea>'
    // },
    // {
    //     question: 'What is the correct HTML for inserting a background image?',
    //     option1: '<background img="background.gif">',
    //     option2: '<body bg="background.gif">',
    //     option3: '<body style="background-image:url(background.gif)">',
    //     correctOption: '<body style="background-image:url(background.gif)">'
    // }
]





let css = [
    // {
    //     question: 'What does CSS stand for?',
    //     option1: 'Colorful Style Sheet',
    //     option2: 'Computer Style Sheet',
    //     option3: 'Cascading Style Sheet',
    //     option4: 'Creative Style Sheet',
    //     correctOption: 'Cascading Style Sheet'
    // },
    // {
    //     question: 'What is the correct HTML for referring to an external style sheet?',
    //     option1: '<stylesheet>mystyle.css</stylesheet>',
    //     option2: '<style src="mystyle.css">',
    //     option3: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    //     correctOption: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
    // },
    // {
    //     question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    //     option1: 'In the <body> section',
    //     option2: 'In the <head> section',
    //     option3: 'At the end of the document',
    //     correctOption: 'In the <head> section'
    // },
    // {
    //     question: 'Which HTML tag is used to define an internal style sheet?',
    //     option1: '<css>',
    //     option2: '<style>',
    //     option3: '<script>',
    //     correctOption: '<style>'
    // },
    // {
    //     question: 'Which HTML attribute is used to define inline styles?',
    //     option1: 'styles',
    //     option2: 'font',
    //     option3: 'style',
    //     option3: 'class',
    //     correctOption: 'style'
    // },
    // {
    //     question: 'Which is the correct CSS syntax?',
    //     option1: 'body{color: black;}',
    //     option2: '{body:color=black;}',
    //     option3: 'body:color=black;',
    //     option4: '{body;color:black;}',
    //     correctOption: 'body{color: black;}'
    // },
    // {
    //     question: 'How do you insert a comment in a CSS file?',
    //     option1: '/*this is a comment*/',
    //     option2: '//this is a comment',
    //     option3: '//this is a comment//',
    //     option3: "'this is a comment",
    //     correctOption: '/*this is a comment*/'
    // },
    // {
    //     question: 'Which property is used to change the background color?',
    //     option1: 'bgcolor',
    //     option2: 'color',
    //     option3: 'background-color',
    //     correctOption: 'background-color'
    // },
    // {
    //     question: 'How do you add a background color for all <h1> elements?',
    //     option1: 'h1 {background-color:#FFFFFF;}',
    //     option2: 'h1.all {background-color:#FFFFFF;}',
    //     option3: 'all.h1 {background-color:#FFFFFF;}',
    //     correctOption: 'h1 {background-color:#FFFFFF;}'
    // },
    // {
    //     question: 'Which CSS property is used to change the text color of an element?',
    //     option1: 'color',
    //     option2: 'text-color',
    //     option3: 'fgcolor',
    //     correctOption: 'color'
    // },
    // {
    //     question: 'Which CSS property controls the text size?',
    //     option1: 'font-size',
    //     option2: 'text-style',
    //     option3: 'text-size',
    //     option4: 'font-style',
    //     correctOption: 'font-size'
    // },
    // {
    //     question: 'What is the correct CSS syntax for making all the <p> elements bold?',
    //     option1: 'p {font-weight:bold;}',
    //     option2: '<p style="font-size:bold;">',
    //     option3: '<p style="text-size:bold;">',
    //     option4: 'p {text-size:bold;}',
    //     correctOption: 'p {font-weight:bold;}'
    // },
    // {
    //     question: 'How do you display hyperlinks without an underline?',
    //     option1: 'a {underline:none;}',
    //     option2: 'a {decoration:no-underline;}',
    //     option3: 'a {text-decoration:no-underline;}',
    //     option4: 'a {text-decoration:none;}',
    //     correctOption: 'a {text-decoration:none;}'
    // },
    // {
    //     question: 'How do you make each word in a text start with a capital letter?',
    //     option1: 'text-style:capitalize',
    //     option2: 'text-transform:capitalize',
    //     option3: 'You can not do that with CSS',
    //     option4: 'transform:capitalize',
    //     correctOption: 'text-style:capitalize'
    // },
    // {
    //     question: 'Which property is used to change the font of an element?',
    //     option1: 'font-style',
    //     option2: 'font-weight',
    //     option3: 'font-family',
    //     correctOption: 'font-family'
    // },
    // {
    //     question: 'How do you make the text bold?',
    //     option1: 'style:bold;',
    //     option2: 'font:bold;',
    //     option3: 'font-weight:bold;',
    //     correctOption: 'font-weight:bold;'
    // },
    // {
    //     question: 'Which property is used to change the left margin of an element?',
    //     option1: 'margin-left',
    //     option2: 'padding-left',
    //     option3: 'indent',
    //     correctOption: 'margin-left'
    // },
    {
        question: 'When using the padding property; are you allowed to use negative values?',
        option1: 'Yes',
        option2: 'No',
        correctOption: 'No'
    },
    {
        question: 'How do you make a list that lists its items with squares?',
        option1: 'list: square;',
        option2: 'list-type: square;',
        option3: 'list-style-type: square;',
        correctOption: 'list-style-type: square;'
    },
    {
        question: 'How do you select an element with id "demo"?',
        option1: '#demo',
        option2: '.demo',
        option3: 'demo',
        option4: '*demo',
        correctOption: '#demo'
    }
]

let js = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<scprit>',
        option2: '<javascript>',
        option3: '<js>',
        option4: '<scripting>',
        correctOption: '<script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">'
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        correctOption: 'False'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctOption: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()'
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        option4: 'if i = 5 then',
        correctOption: 'if(i == 5)'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        option4: 'if(i <> 5)',
        correctOption: 'if(i != 5)'
    },
    {
        question: 'How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)'
    },
    {
        question: 'How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        option4: 'for (i = 0; i <= 5)',
        correctOption: 'for (i = 0; i <= 5; i++)'
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment'
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        option1: 'let colors = "red", "green", "blue"',
        option2: 'let colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'let colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        option4: 'let colors = ["red", "green", "blue"]',
        correctOption: 'let colors = ["red", "green", "blue"]'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)',
        option2: 'rnd(7.25)',
        option3: 'Math.rnd(7.25)',
        option4: 'Math.round(7.25)',
        correctOption: 'Math.round(7.25)'
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        option1: 'ceil(x, y)',
        option2: 'top(x, y)',
        option3: 'Math.ceil(x ,y)',
        option4: 'Math.max(x, y)',
        correctOption: 'Math.max(x, y)'
    },
    {
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        option1: 'w2 = window.open("http://www.w3schools.com");',
        option2: 'w2 = window.new("http://www.w3schools.com");',
        correctOption: 'w2 = window.open("http://www.w3schools.com");'
    },
    {
        question: 'JavaScript is the same as Java.',
        option1: 'True',
        option2: 'False',
        correctOption: "False"
    },
    {
        question: "How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName'
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseclick',
        option3: 'onchange',
        option4: 'onmouseover',
        correctOption: 'onclick'
    },
    {
        question: 'How do you declare a JavaScript letiable?',
        option1: 'v carName;',
        option2: 'letiable carName;',
        option3: 'let carName;',
        correctOption: 'let carName;'
    }
]

let computerBasics = [
    {
        question: 'What does CPU stand for?',
        option1: 'Central Process Unit',
        option2: 'Computer Personal Unit',
        option3: 'Central Processing Unit',
        option4: 'Central Processor Unit',
        correctOption: 'Central Processing Unit'
    },
    {
        question: 'Which computer component is also known as the "brain" of the computer?',
        option1: 'Hard Drive',
        option2: 'RAM (Random Access Memory)',
        option3: 'CPU (Central Processing Unit)',
        option4: 'Motherboard',
        correctOption: 'CPU (Central Processing Unit)'
    },
    {
        question: 'What does RAM stand for in computing?',
        option1: 'Random Access Memory',
        option2: 'Read-Only Memory',
        option3: 'Random Allocation Memory',
        option4: 'Read Access Memory',
        correctOption: 'Random Access Memory'
    },
    {
        question: 'What is the primary function of an operating system in a computer?',
        option1: 'Run applications',
        option2: 'Manage hardware resources',
        option3: 'Store data',
        option4: 'Play games',
        correctOption: 'Manage hardware resources'
    },
    {
        question: 'What does the term "GUI" stand for in computing?',
        option1: 'Graphical User Interface',
        option2: 'General User Interaction',
        option3: 'Global User Interface',
        option4: 'Graphical Utility Interface',
        correctOption: 'Graphical User Interface'
    },
    {
        question: 'What is the function of the motherboard in a computer?',
        option1: 'Store data',
        option2: 'Run software',
        option3: 'Connect all hardware components',
        option4: 'Display graphics',
        correctOption: 'Connect all hardware components'
    },
    {
        question: 'Which type of computer memory is non-volatile and retains data even when the power is turned off?',
        option1: 'RAM (Random Access Memory)',
        option2: 'Cache Memory',
        option3: 'ROM (Read-Only Memory)',
        option4: 'Virtual Memory',
        correctOption: 'ROM (Read-Only Memory)'
    },
    {
        question: 'What is the purpose of an optical mouse in computing?',
        option1: 'Display images on the screen',
        option2: 'Control cursor movement',
        option3: 'Store files',
        option4: 'Play music',
        correctOption: 'Control cursor movement'
    },
    {
        question: 'What does GPU stand for in computing?',
        option1: 'General Processing Unit',
        option2: 'Graphics Performance Unit',
        option3: 'Graphics Processing Unit',
        option4: 'Global Performance Unit',
        correctOption: 'Graphics Processing Unit'
    },
    {
        question: 'Which type of software allows users to browse the World Wide Web?',
        option1: 'Spreadsheet software',
        option2: 'Web browser',
        option3: 'Word processing software',
        option4: 'Antivirus software',
        correctOption: 'Web browser'
    },
    {
        question: 'What is the purpose of an Ethernet cable in computer networking?',
        option1: 'Power the computer',
        option2: 'Connect to Wi-Fi',
        option3: 'Connect devices in a wired network',
        option4: 'Charge mobile devices',
        correctOption: 'Connect devices in a wired network'
    },
    {
        question: 'What is the file extension for executable files in Windows?',
        option1: '.exe',
        option2: '.doc',
        option3: '.jpg',
        option4: '.pdf',
        correctOption: '.exe'
    },
    {
        question: 'Which key is commonly used for copying selected text in Windows?',
        option1: 'Ctrl',
        option2: 'Shift',
        option3: 'Alt',
        option4: 'Esc',
        correctOption: 'Ctrl'
    },
    {
        question: 'What does the acronym "URL" stand for in computing?',
        option1: 'Uniform Resource Locator',
        option2: 'Universal Reference Link',
        option3: 'Unified Resource Language',
        option4: 'User Rights and Licenses',
        correctOption: 'Uniform Resource Locator'
    },
    {
        question: 'Which computer programming language is often used for web development?',
        option1: 'Java',
        option2: 'Python',
        option3: 'C++',
        option4: 'JavaScript',
        correctOption: 'JavaScript'
    },
    {
        question: 'What is the function of a firewall in computer security?',
        option1: 'Block unwanted emails',
        option2: 'Protect against viruses',
        option3: 'Monitor network traffic and filter incoming/outgoing data',
        option4: 'Boost computer speed',
        correctOption: 'Monitor network traffic and filter incoming/outgoing data'
    }
];
