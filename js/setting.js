var date = new Date()
currentYear = date.getFullYear()

for (let i = 1960; i < currentYear; i++){
    document.getElementById('session_list').innerHTML += `<option value='${i}/${i+1}'>${i}/${i+1}</option>`
}
