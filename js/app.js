'use strict';

let score = 0;


function q1() {
    let NAME = prompt('whats your name?');
    while (!NAME) {
        NAME = prompt('please write your name');
    }
    alert('hello ' + NAME + ' welcome in My about me webpage');
}
q1();



function q2() {
    let howu = prompt('Are me happy always? ');
    howu = howu.toLowerCase();
    if (howu === 'y' || howu === 'yes') {
        alert('Thats great to now');
        score++;
    }
    else if (howu === 'n' || howu === 'no') {
        alert(' no ,iam  happy becuase the life short :) ');
    }
    else {
        alert('plz in next time ans yes or no just. ');
    }
}
q2();

function q3() {
    let run = prompt('DO i love running in the morning?(ans with yes or no plz)');
    run = run.toUpperCase();


    if (run === 'YES' || run === 'Y') {
      
        alert(' that is right You know me good');
        score++;
    }
    else if (run === "NO" || run === "N") {
      
        alert('You dont know me i love running :( ');

    }
    else {
        alert("Plz ans yes/y or no/n  ")
    }
}
q3();

function q4() {
    let movie = prompt('DO i love the Philosophy? /answer with yes or no');
    movie = movie.toLowerCase();
    if (movie === 'yes' || movie === 'y') {
       
        alert('wow that right');
        score++;
    }
    else if (movie === 'no' || movie === 'n') {
       
        alert('NO I love the Philosophy ');
    }
    else {
        alert("Plz ans yes/y or no/n ")
    }
}
q4();



function q5() {
    let travel = prompt('DO i love the travel(ans with yes or no plz) ? ')

    switch (travel.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('WOW thatis rghit');
            score++;
            break;
        case 'NO':
        case 'N':
            alert('No actullay I hate stay in same place:(');
            break;
    }
}
q5();

function q6() {
    let meal = prompt('Iam a vegetarian or not ?')
    meal = meal.toUpperCase();
    if (meal == 'YES' || meal == 'Y') {
        alert('Yes true Iam vegetarian ')
        score++;
    }
    else if (meal == 'NO' || meal == 'N') {
        alert('NO you wrong I am vegetarian  ');
    }
    else {
        alert('Plz ans yes/y or no/n ');
    }
}
q6();

function q7() {
    let fruit = prompt("The last question :), Do i love fruit?/answeer yes or no");
    fruit = fruit.toLowerCase();
    if (fruit == 'yes' || fruit == 'y') {
        alert("Yes i love the fruit it is delicous");
        score++;

    }
    else if (fruit == 'no' || fruit == 'n') {
        alert('NO actully i love the fruit ');
    }
    else {
        alert("Plz ans yes or no ");
    }
}
q7();


// Q6 

function q8() {
    let num = prompt('what the number in my mind  guess it?');
    num = Number(num);
    for (let i = 0; i < 4; i++) {
        if (num === 12) {
            alert("yes that true");
            score++;
            break;
        }
        else if (num > 12) {
            alert("too high");
            num = prompt('what the number in my mind  guess it?');

        }

        else if (num < 12) {

            alert("too low");
            num = prompt('what the number in my mind  guess it?');

        }

    }
    alert("The correct answer is 12 ");
}
q8();


//Q7
function q9() {
    let myArr = ['harry poter', 'Okja', 'siccin', 'tolkien'];
    for (let i = 0; i < 6; i++) {
        let gust = prompt(' gusse what my fav movie ?');

        for (let index = 0; index < myArr.length; index++) {
            if (gust === myArr[index]) {
                alert("it's true");
                i = 10;
                score++;

                break;
            }

        }
        if (i != 10) {
            alert('plz try again');

        }

    }

    alert(`my fav movies   ${myArr}`);
}
q9();
alert("your score is " + score + ' from 7');

alert("Thank you  " + NAME + ' for visit my webpage');







