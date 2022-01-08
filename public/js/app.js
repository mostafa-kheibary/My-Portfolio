const $ = document;
const Lis = $.querySelectorAll('header li');
const header = $.querySelector('header');
const LisLink = $.querySelectorAll('header li a');
const Inicator = $.querySelector('.line-spect')
const typeText = $.querySelector('.type');
const loader = $.querySelector('.loader');
const Elavator = $.querySelector('.elavator');
const Submit = $.querySelector('.submit-form')
const NameInput = $.querySelector('.name-input');
const EmailInput = $.querySelector('.email-input');
const EmailError = $.querySelector('.lable-email');
const FormError = $.querySelector('.lable-form');
const MessageInput = $.querySelector('.message-input');
let position = 0;
// **
const intro = $.querySelector('.intro');
const pro = $.querySelector('.pro');
const cvlink = $.querySelector('.cvlink');
const contact = $.querySelector('.contact');
// **
const Sections = $.querySelectorAll('.sec');
const Texts = [`
function person() {
    this.name : ‘mostafa kheibary’;
    this.live : {
        Country : ‘Iran’;
        City : ‘Tehran’; 
    } 
}
`];

// on load : 
// hide scroll bar 
document.body.style.overflow = 'hidden';




//My functions :
function write() {
    typeText.innerHTML = Texts[0].substring(0, position);
    if (position++ != Texts[0].length) {
        setTimeout(write, 100);
    }
}

function SendContact() {
    console.log(EmailInput.value)
    const templateParams = {
        from_name: NameInput.value,
        email: EmailInput.value,
        message: MessageInput.value
    };
    emailjs.send('service_t20nf7t', 'template_9juwq3e', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
function Scroll() {
    if (scrollY >= 200) {
        Elavator.classList.add('elavator-show')
    }
    else {
        Elavator.classList.remove('elavator-show')
    }
    if (scrollY >= 150) {
        header.classList.add('header-show');
    }
    else {
        header.classList.remove('header-show');
    }
    if (scrollY <= 200) {
        intro.classList.add('yellow');
    }
    else {
        intro.classList.remove('yellow');
    }
    if (scrollY > 200 && scrollY < 1012) {
        pro.classList.add('yellow');
    }
    else {
        pro.classList.remove('yellow');
    }
    if (scrollY > 1012 && scrollY < 1570) {
        cvlink.classList.add('yellow');
    }
    else {
        cvlink.classList.remove('yellow');
    }
    if (scrollY > 1570) {
        contact.classList.add('yellow');
    }
    else {
        contact.classList.remove('yellow');
    }
}
// My event :
for (const li of Lis) {
    li.addEventListener('click', () => {
        for (const sec of Sections) {
            if (li.innerText === sec.dataset.num) {
                window.scrollTo(0, sec.offsetTop - 200);
            }
        }

    })
    li.addEventListener('mouseover', () => {
        Inicator.style.transform = `scale(1)`
        Inicator.style.left = `${li.offsetLeft}px`
        Inicator.style.width = `${li.offsetWidth}px`
    });
    li.addEventListener('mouseout', () => {
        Inicator.style.transform = `scale(0)`
    })
}
// loader 
window.addEventListener('load', () => {
    setTimeout(() => {
        write();
        loader.classList.add('loader-hide');
        document.body.style.overflow = 'visible';
    }, 500)
});

window.addEventListener('scroll', () => {
    Scroll();
})

EmailInput.addEventListener('keyup', () => {
    const value = EmailInput.value;
    FormError.classList.remove('lable-show');
    if (value.includes('.') && value.includes('@')) {
        EmailError.classList.remove('.lable-show');
    }
    else {
        EmailError.classList.add('.lable-show');
    }

})

Submit.addEventListener('click', () => {
    const value = EmailInput.value;
    if (value.includes('.') && value.includes('@')) {
        SendContact();
        NameInput.value = '';
        EmailInput.value = '';
        MessageInput.value = '';
    }
    else {
        FormError.classList.add('lable-show');
    }
})



