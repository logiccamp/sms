
// user_action toggler
const header_user = document.querySelector('.header_user')
const user_action = document.querySelector('.user_action')
header_user.addEventListener('click', function(){
    // alert("Hello")
    user_action.classList.toggle('active')
})

// !user_action toggler

// sidebar
const header__toggler = document.querySelector('.header__toggler')
const sidebar = document.querySelector('.sidebar')
const page = document.querySelector('#page')
header__toggler.addEventListener('click', function(){
    sidebar.classList.toggle('active')
    page.classList.toggle('active')
})
// ! sidebar

// goback
function goBack() {
    window.history.go(-1);
}