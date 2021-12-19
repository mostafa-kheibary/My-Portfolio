const lis = document.querySelectorAll('header li a');

for(const li of lis){
    li.addEventListener("click",()=>{
        for(const li of lis){
            li.classList.remove('active');
        }
        li.classList.add('active');
    });
}