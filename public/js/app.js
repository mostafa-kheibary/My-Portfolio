const lis = document.querySelectorAll('header li a');
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


// menu clicked efect
for (const li of lis) {
    li.addEventListener("click", () => {
        for (const li of lis) {
            li.classList.remove('active');
        }
        li.classList.add('active');
    });
}

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