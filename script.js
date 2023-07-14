const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['Blue','black','pink','grey','red','purple'];
body.style.backgroundColor = 'grey'
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex]
})