const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.item')

tabs.forEach((tab, index) => {
    tab.onclick = function()
    { 
        $('.item.active').classList.remove('active')
        this.classList.add('active')
    }
})