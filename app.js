const navbtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navclose =document.getElementById('nav-close');


navbtn.addEventListener('click', function(){
    navbar.classList.add('ShowNav');
})

navclose.addEventListener('click',function(){
    navbar.classList.remove('ShowNav');
})