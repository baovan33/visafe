// Silder
let listSlider = document.querySelector('.slider-block');
let items = listSlider.querySelectorAll('.slider-block-item');

let numActive = document.getElementById('num-active');
let numLenght = document.getElementById('num-lenght');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let numAc  = 1;
let lenghItems = items.length - 2;

numLenght.innerHTML = '0' + Number(lenghItems + 1);
numActive.innerHTML = '0' + numAc;

next.onclick = function() {
    if (active + 1 > lenghItems) {
        active = 0
    } else {
        active += 1;
    }
    numAc = active + 1;
    numActive.innerHTML = '0' + numAc;
    reloadSlider()
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lenghItems;
    } else {
        active -= 1;

    }
    numAc = active + 1;
    numActive.innerHTML = '0' + numAc;
    reloadSlider()
}


function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    listSlider.style.left = -checkLeft + 'px';
}

// Help
let listTitle = document.querySelector('.help-list-title');
let listTitleItems = listTitle.querySelectorAll('.help-content-title');

let nextHelp = document.getElementById('next-help');
let prevHelp = document.getElementById('prev-help');

let lengthTitleItem = listTitleItems.length - 1;

let numAcHelp = document.getElementById('num_active_help')
let numLenghtHelp = document.getElementById('num_length-help');

numLenghtHelp.innerHTML = '0' + Number(listTitleItems.length);
numAcHelp.innerHTML = '0' + numAc;

flatNum = 1;
prevHelp.style.display = "none";
nextHelp.onclick = function() {
   
    if (active + 1 > lengthTitleItem) {
        active = 0;
        flatNum = 1;

    } else {
        active += 1;
        flatNum += 1;
    }
    if (flatNum === 1) {
        prevHelp.style.display = "none";

    } else {
        prevHelp.style.display = "";
    }
    numAc = active + 1;
    numAcHelp.innerHTML = '0' + numAc;

    reloadHelp()
}

prevHelp.onclick = function() {
   
    if ( active === 0 ) {
        flatNum = 1;
    } else {
        flatNum = active;
    }

    if (active - 1 < 0) {
        active = 0;

    } else {
        active -= 1;        
    }

    if (flatNum === 1) {
        console.log(flatNum);
        prevHelp.style.display = "none";

    } else {
        prevHelp.style.display = "";
    }

    numAc = active + 1;
    numAcHelp.innerHTML = '0' + numAc;

    reloadHelp()
}

function reloadHelp() {
    let checkLeft = listTitleItems[active].offsetLeft;
    listTitle.style.left = -checkLeft + 'px';
}

// faq

let faqMulContent = document.querySelectorAll('.faq-multi-content');
faqMulContent.forEach(function (faqSingContent){
    let faqContent = faqSingContent.querySelector('.faq-content');
    faqContent.style.display = "none";
    let arrow = faqSingContent.querySelector('.fa-chevron-down');
        arrow.onclick = function() {
            if (faqContent.style.display === "none") {
                faqContent.style.display = "block";
            } else {
                faqContent.style.display = "none";
            }
    }

});



