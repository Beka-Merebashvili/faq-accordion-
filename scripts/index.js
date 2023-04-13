let question = document.getElementsByClassName('question') ;
let answer = document.getElementsByClassName('answer') ;
let arrow = document.getElementsByClassName('arrow');


let questionArray = [...question] ;

let y = null ;

questionArray.forEach((question) => {
    question.addEventListener('click' , () => {
         if(question == y ) {
            question.nextElementSibling.style.display = 'none' ;
            y = null ;
            question.firstElementChild.classList.remove('bold');
            question.lastElementChild.classList.remove('arrow-up');
         }
         else {
            if (y!= null) {
                y.nextElementSibling.style.display = 'none' ;
                y.firstElementChild.classList.remove('bold');
                y.lastElementChild.classList.remove('arrow-up');
            }
            question.lastElementChild.classList.add('arrow-up');
            question.firstElementChild.classList.add('bold');
            question.nextElementSibling.style.display = 'block' ;
            y = question;
         }
    })
})


 