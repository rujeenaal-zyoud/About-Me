'use strict';

var NAME = prompt("Please enter your name");
function hi(yourname) {
    if (NAME === null && NAME === " ") {
        var hello = "hi ,welcome in About me webpage ";
    }
    else { var hello = "hi " + NAME + ",welcome in  My About me webpage"; }

    alert(hello);
}
hi(NAME);

let howu = prompt('Are me happy always? /ans with (y or n)');
howu = howu.toLowerCase();
if (howu === 'y') {
    //console.log('Thats great to now');
    alert('Thats great to now');

}

else if (howe === 'n') {
    //console.log('Be happy the life short :) ');
    alert(' no ,iam  happy becuase the life short :) ');
}
else {
    //console.log('plz choice Siccin or zompi');
    alert('plz in next time ans yes or no just. ');
}



let run = prompt('DO i love running in the morning?(ans with yes or no plz)');
run = run.toUpperCase();
console.log(run);

while (run != "NO" && run != "YES") {
    alert('plz enter yes or no')
}

if (run === 'YES') {
    //console.log('You know my age Iam happy');
    alert(' that is right You know me good');
}
else if (run === "NO") {
    //console.log(alert('You dont know me ,but you can try :( '));
    alert('You dont know me i love running :( ');
    run = run + 1
}


let movie = prompt('DO i hate the Philosophy? /answer with yes or no');
movie = movie.toLowerCase();
console.log(movie);
if (movie === 'yes') {
    //console.log('wow that right');
    alert('NO ,i dont hate the philosophy');
}
else if (movie === 'no') {
    //console.log('NO I dont love this moves ');
    alert('wow ,yes i love the philosophy ');
}





let travel = prompt('DO i love the travel(ans with yes or no plz) ? ')

console.log(travel);
switch (travel.toUpperCase()) {
    case 'YES':
    case 'Y':
        // console.log('Yes this my lovely color');
        alert('WOW thatis rghit');
        break;
    case 'NO':
    case 'N':
        //console.log('No actullay I hate this color :(');
        alert('No actullay I hate stay in same place:(');
        break;
}



let meal = prompt('Iam a vegetarian or not ?')
meal = meal.toUpperCase();
console.log(meal);
if (meal == 'YES') {
    //console.log('Yes I love rice ')
    alert('Yes true Iam vegetarian ')
}
if (meal == 'NO') {
    // console.log('NO I am vegetarian');
    alert('NO you wrong I am vegetarian  ');
}


let fruit = prompt("The last question :), Do i love fruit?/answeer yes or no");
fruit = fruit.toLowerCase();
console.log(fruit);
if (fruit == 'yes') {
    //console.log("I dont love bannana may you love it");
    alert("Yes i love the fruit it is delicous");

}
else if (fruit == 'no') {
    //console.log('Yes i love the apple ');
    alert('NO actully i love the fruit ' + NA);
}



alert("Thank you " + NAME + ' for visit my webpage')