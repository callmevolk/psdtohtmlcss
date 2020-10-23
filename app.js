const moreButton = document.getElementById("navbar__more");
const band1 = document.getElementById("band--1");
const band2 = document.getElementById("band--2");
const band3 = document.getElementById("band--3");
const bandText1 = document.querySelector('.text__details--1');
const bandText2 = document.querySelector('.text__details--2');
const bandText3 = document.querySelector('.text__details--3');
const dropdown = document.querySelector('.dropdown__menu');
const person = document.querySelectorAll('.contact__person');
const personInfo = document.querySelectorAll('.person');
const navbarButton = document.querySelector('.button--navbar');
const navbarLinks = document.querySelector('.navbar__links');

navbarButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('navbar__links--small')
})

moreButton.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown__menu--active');
    moreButton.classList.toggle('dropdown--active');
});

band1.addEventListener('click', () => {
    bandText1.classList.toggle('text--visible');
});

band2.addEventListener('click', () => {
    bandText2.classList.toggle('text--visible');
});

band3.addEventListener('click', () => {
    bandText3.classList.toggle('text--visible');
});

for(let i = 0; i < person.length; i++) {
    person[i].addEventListener('click', () => {
        if(!(person[i].classList.contains('contact__person--active'))) {
            for(let j = 0; j < person.length; j++) {
                if(person[j].classList.contains('contact__person--active')) {
                    person[j].classList.remove('contact__person--active');
                }
            }
            for(let k = 0; k < personInfo.length; k++) {
                if(personInfo[k].classList.contains('person--active')) {
                    personInfo[k].classList.remove('person--active');
                }
            }
            person[i].classList.add('contact__person--active');
            personInfo[i].classList.add('person--active');
        }
    });
}