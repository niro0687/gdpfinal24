const KwButton = document.querySelector('.kw-Button')
const kwFolio = document.querySelector('.kw-form_folio')
const Txt = document.querySelector('.text')
const KwPrivacy = document.querySelector('.kw-privacy')

KwButton.addEventListener('click' , ()=>{
    kwFolio.classList.toggle('active')
})

Txt.addEventListener('click' , ()=>{
    KwPrivacy.classList.toggle('active')
})