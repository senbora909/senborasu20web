function showFormData(event) {
    event.preventDefault();


let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let salary = document.getElementById("salary").value;
let hireDate = document.getElementById("hiredate").value;

let formattedSalary = new Intl.NumberFormat('en-US' ,{
    style: 'currency',
    currency: 'USD'
}).format(salary);


let alertBox = document.getElementById('formAlert');

alertBox.innerHTML = `
    <div class="d-flex justify-content-between align-item-center"><br>
            <strong > Form Submitted!</strong>
        <button type = "button" class= "btn-close" onclick = "hireAlert()" aria-label = "Close"></button>
    </div>
    <hr>
    <p ><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Salary:</b> ${formattedSalary}</p>
    <p><b>HireDate:</b> ${hireDate}</p>
        `
        alertBox.classList.remove("d-none");

    //alert result show message
    alert("1.EmpName: " + name + "\n" +
        "2.Email: " + email + "\n" +
        "3.Salary : " + formattedSalary + "\n" +
        "4.HireDate: " + hireDate);
}

function hireAlert() {
    document.getElementById("formAlert").classList.add("d-none");
}