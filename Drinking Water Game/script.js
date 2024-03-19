const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percentage');
const remain = document.getElementById('remained');

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> highlight(idx))
})

function highlight(idx){
    if( smallCups[idx].classList.contains('full') ){
        idx--;
    }
    smallCups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full');
        }
        else{
            cup.classList.remove('full')
        }
    })
    fillBigCup();
}

function fillBigCup(){
    const fullCup = document.querySelectorAll('.cup-small.full').length;
    const totalCup = smallCups.length;
    
    if(fullCup === 0){
        percent.style.visibility = 'hidden'
        percent.style.height = 0;
    }
    else{
        percent.style.visibility = 'visible'
        percent.style.height = `${fullCup / totalCup * 330}px`
        percent.innerText = `${fullCup / totalCup * 100}%`
    }

    if(fullCup === totalCup){
        remain.style.visibility = 'hidden'
        remain.style.height = 0
    }
    else{
        remain.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCup / 1000)}L`
    }

}