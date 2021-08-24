// =============================================== student info 
const studentMinus = document.querySelector('.toggle__student__info__minus')
const studentEye = document.querySelector('.toggle__student__info__eye')
const studentInfo = document.querySelector('.student__info')

studentMinus.addEventListener('click', function(){
    studentMinus.classList.toggle('inactive')
    studentEye.classList.toggle('inactive')
    studentInfo.classList.toggle('inactive')
})

studentEye.addEventListener('click', function(){
    studentMinus.classList.toggle('inactive')
    studentEye.classList.toggle('inactive')
    studentInfo.classList.toggle('inactive')
})



// =============================================== student passport
const studentPassportMinus = document.querySelector('.toggle__student__passport__minus')
const studentPassportEye = document.querySelector('.toggle__student__passport__eye')
const studentPassport = document.querySelector('.student__passport')



studentPassportMinus.addEventListener('click', function(){
    studentPassportMinus.classList.toggle('inactive')
    studentPassportEye.classList.toggle('inactive')
    studentPassport.classList.toggle('inactive')
})

studentPassportEye.addEventListener('click', function(){
    studentPassportMinus.classList.toggle('inactive')
    studentPassportEye.classList.toggle('inactive')
    studentPassport.classList.toggle('inactive')
})


// =============================================== student parent
const parentMinus = document.querySelector('.toggle__parent__info__minus')
const parentEye = document.querySelector('.toggle__parent__info__eye')
const parentInfo = document.querySelector('.parent__info')

parentMinus.addEventListener('click', function(){
    parentMinus.classList.toggle('inactive')
    parentEye.classList.toggle('inactive')
    parentInfo.classList.toggle('inactive')
})

parentEye.addEventListener('click', function(){
    parentMinus.classList.toggle('inactive')
    parentEye.classList.toggle('inactive')
    parentInfo.classList.toggle('inactive')
})


// =============================================== student documents 
const studentDocumentMinus = document.querySelector('.toggle__student__document__minus')
const studentDocumentEye = document.querySelector('.toggle__student__document__eye')
const studentDocuments = document.querySelector('.student__documents')

studentDocumentMinus.addEventListener('click', function(){
    studentDocumentMinus.classList.toggle('inactive')
    studentDocumentEye.classList.toggle('inactive')
    studentDocuments.classList.toggle('inactive')
})

studentDocumentEye.addEventListener('click', function(){
    studentDocumentMinus.classList.toggle('inactive')
    studentDocumentEye.classList.toggle('inactive')
    studentDocuments.classList.toggle('inactive')
})




// ============================================= student document1
const studentDocument1 = document.querySelector('#student__document__1')
const studentDocument1Cont = document.querySelector('.student__document__1')
const studentDocument1Label = document.querySelector('#student__document__1__label')
studentDocument1.addEventListener('change', function(){
    const file = this.files[0]
    studentDocument1Cont.lastChild.remove()
    if(file != null){
        studentDocument1Cont.style.display = 'block'
        studentDocument1Label.textContent = "Change Birth Cert."
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        
        // load file reader
        fileReader.onload = function() {
            const data = fileReader.result;
            const img = document.createElement('img')
            img.alt = file.name
            img.src = data
            img.classList.add('student__document__img')
            studentDocument1Cont.appendChild(img)
        };
    }
})




// ============================================= student document2
const studentDocument2 = document.querySelector('#student__document__2')
const studentDocument2Cont = document.querySelector('.student__document__2')
const studentDocument2Label = document.querySelector('#student__document__2__label')
studentDocument2.addEventListener('change', function(){
    const file = this.files[0]
    studentDocument2Cont.lastChild.remove()
    if(file != null){
        studentDocument2Cont.style.display = 'block'
        studentDocument2Label.textContent = "Change Imm. Card"
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        
        // load file reader
        fileReader.onload = function() {
            const data = fileReader.result;
            const img = document.createElement('img')
            img.alt = file.name
            img.src = data
            img.classList.add('student__document__img')
            studentDocument2Cont.appendChild(img)
        };
    }
})

// ============================================= student document2
const studentpassport2 = document.querySelector('#student__passport')
const studentpassport2Cont = document.querySelector('.student__passport__img')
const studentpassport2Label = document.querySelector('#student__passport__label')
studentpassport2.addEventListener('change', function(){
    const file = this.files[0]
    studentpassport2Cont.style.background = 'white'
    studentpassport2Cont.lastChild.remove()
    if(file != null){
        studentpassport2Cont.style.display = 'block'
        studentpassport2Label.textContent = "Change"
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        
        // load file reader
        fileReader.onload = function() {
            const data = fileReader.result;
            const img = document.createElement('img')
            img.alt = file.name
            img.src = data
            img.classList.add('student__passport__img__img')
            studentpassport2Cont.appendChild(img)
        };
    }
})