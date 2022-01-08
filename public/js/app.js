const Lis = document.querySelectorAll('header li');
const Inicator = document.querySelector('.line-spect')
const typeText = document.querySelector('.type');
const Texts = [`
function person() {
    this.name : ‘mostafa kheibary’;
    this.live : {
        Country : ‘Iran’;
        City : ‘Tehran’; 
    } 
}
`];
// type writher effect
let position = 0;
function write() {
    typeText.innerHTML = Texts[0].substring(0,position);
    if (position++ != Texts[0].length) {
        setTimeout(write, 100);
    }
}

window.addEventListener('load',()=>{
    write();
})



for(const li of Lis){
    li.addEventListener('mouseover',()=>{
        Inicator.style.transform = `scale(1)`
        Inicator.style.left = `${li.offsetLeft}px`
        Inicator.style.width = `${li.offsetWidth}px`
    });
    li.addEventListener('mouseout',()=>{
        Inicator.style.transform = `scale(0)`
    })
}