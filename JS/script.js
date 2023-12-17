const nav =document.querySelector
('.nav');

document.querySelector('#humberger').onclick = () => {
    nav.classList.toggle('active');
};

const humberger = document.querySelector('#humberger');

document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});