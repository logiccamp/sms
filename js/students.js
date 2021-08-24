
// demo
const list_body = document.querySelector('.list_body')
const tr = document.createElement('tr')
tr.innerHTML = '<tr><td scope="row">1</td><td>Olakunle Mazillab</td><td>Basic 2</td><td><a href="" class="view text-decoration-none text-success"><span class="fa fa-eye"></span></a><a href="" class="view text-primary"><span class="fa fa-print"></span></a><a href="" class="text-danger"><span class="fa fa-times"></span></a></td><tr>'

for (let i = 0; i < 10; i++) {
    list_body.innerHTML += '<tr><td scope="row">1</td><td>Olakunle Mazillab</td><td>Basic 2</td><td><a href="student-details.html" class="view text-decoration-none text-success"><span class="fa fa-eye"></span></a><a href="" class="view text-primary"><span class="fa fa-print"></span></a><a href="" class="text-danger"><span class="fa fa-times"></span></a></td><tr>'
}


// ! demo

// delte student 

deleteStudentCheck = () => {
    const result = confirm("Are you sure to delete")
    if(!result){
        return false;
    }
}


