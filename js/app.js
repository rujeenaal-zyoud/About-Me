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

let howu = confirm('Are you happy');
if (howu === true) {
    //console.log('Thats great to now');
    alert('Thats great to now');

}
else {
    //console.log('Be happy the life short :) ');
    alert('Be happy the life short :) ');
}


let age = prompt('What my age?');
age = Number(age);
//console.log(age);
if (age === '22') {
    //console.log('You know my age Iam happy');
    alert('You know my age Iam happy');
}
if (age >= 23 || age < 22) {
    //console.log(alert('You dont know me ,but you can try :( '));
    alert('You dont know me ,but you can try :( ');
}


let movie = prompt('What is my favourite movie siccin/zompi?');
movie = movie.toLowerCase();
//console.log(movie);
if (movie == 'siccin') {
    //console.log('wow that right');
    alert('wow that right');
}
else if (movie == 'zompi') {
    //console.log('NO I dont love this moves ');
    alert('NO I dont love this moves ');
}
else {
    //console.log('plz choice Siccin or zompi');
    alert('plz choice Siccin or zompi');
}




let favcolour = prompt('what my lovely color the pink/gray ? ')

//console.log(favcolour);
switch (favcolour.toUpperCase()) {
    case 'PINK':
        // console.log('Yes this my lovely color');
        alert('Yes this my lovely color');
        break;
    case 'GRAY':
        //console.log('No actullay I hate this color :(');
        alert('No actullay I hate this color :(');
        break;
}



let meal = prompt('What my fav meal rice/meat?')
meal = meal.toUpperCase();
//console.log(meal);
if (meal == 'RICE') {
    //console.log('Yes I love rice ')
    alert('Yes I love rice ')
}
if (meal == 'meat') {
    // console.log('NO I am vegetarian');
    alert('NO I am vegetarian');
}


let fruit = prompt("The last question :), what my fav fruit apple / bannana?");
fruit = fruit.toLowerCase();
//console.log(fruit);
if (fruit == 'bannana') {
    //console.log("I dont love bannana may you love it");
    alert("I dont love bannana may you love it");

}
if (fruit == 'apple') {
    //console.log('Yes i love the apple ');
    alert('Yes i love the apple ');
}



alert("Thank you " + NAME + ' for visit my webpage')