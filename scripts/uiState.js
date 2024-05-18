'use strict';

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains('ui__changable')){
            button.classList.toggle('button--selected');
        }
    })
})