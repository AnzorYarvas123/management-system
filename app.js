// constructor 




function Employee (employeeID, fullName, department, level, imageURL, salary){
    this.employeeID = employeeID
    this.fullName =  fullName
    this.department =  department
    this.level = level 
    this.imageURL = imageURL
    this.salary = this.calcSalary(level)
    
    }



Employee.prototype.calcSalary = function(level){
switch(level){

    case "Senior":
        return Math.round( Math.random() *(500) + 1500);
    break;

    case "Mid_Senior":
        return Math.round(Math.random() *(500) + 1000);
    break;

    case "Junior":
        return Math.round(Math.random() *(500) + 500);
    break;

}
}

let solution = new Employee(0, "test", "test", "Mid_Senior", "test");
solution.salary = solution.calcSalary(solution.level);

console.log (solution);




const form = document.getElementById("form");


function render(event){
    event.preventDefault();
   
  let id = event.target.idInput.value;
  let nameInput = event.target.nameInput.value;
  let idDepartment = event.target.idDepartment.value;
  let idLevel = event.target.idLevel.value;
  let idImage = event.target.idImage.value;

  let New_Employee = new Employee (id, nameInput, idDepartment, idLevel, idImage);
  console.log(New_Employee);
}

// function print(employee){
//     let Card = document.

// }

// const Card_2 = document.getElementById("Card");
// // const form = document.getElementById("form");
// let allEmployees = [] ;

form.addEventListener("submit", render);


//Random Salary

    // function Randoms(Min, Max) {
    //     Min = Math.ceil(Min);
    //     Max = Math.floor(Max);
    //     return Math.floor(Math.random() * (Max - Min) + Min);
    // }

// let Table = document.createElement("table");

// let T_body = document.createElement("tbody");


//Print Full Name and Salary

// let employee_Info = [
//     new Employee_Information("1000", "Ghazi Samer", "Administration", "Senior"),
//     new Employee_Information("1001", "Lana Ali", "Finance", "Senior"),
//     new Employee_Information("1002", "Tamara Ayoube", "Marketing", "Senior"),
//     new Employee_Information("1003", "Safi Walid", "Administration", "Mid-Senior"),
//     new Employee_Information("1004", "Omar Zaid", "Development", "Senior"),
//     new Employee_Information("1005", "Rana Salah", "Development", "Junior"),
//     new Employee_Information("1006", "Hadi Ahmad", "Finance", "Mid-Senior"),
// ]






// for (const Employee_Information of employee_Info) {
//     console.log(Employee_Information.Full_Name + " " + Employee_Information.Salary);

//      Table_Body(Employee_Information);''
// }



/////////////////////////////////////////////////////////////////////////////////


// function T_Head(Employee_Information) {

//     let table_head = document.createElement("thead");
//     let tr = document.createElement("tr");

//     for (const Loops of Object.entries(Employee_Information)) {

//         if (Loops[0]) {
//             let th = document.createElement("th");
//             th.textContent = Loops[0];
//             // tr.append(th);
//         }
//     }



//     table_head.append(tr);

//     return table_head;
// }




// function Table_Body(Employee_Information) {

//     let tr = document.createElement("tr");

//     for (const loop of Object.entries(Employee_Information)) {
//         if (loop[0]) {
//             let th = document.createElement("th");
//             th.textContent = loop[1];
//             tr.append(th);
//         }
//     }

//     T_body.append(tr);
// }

// Table.append(T_Head(employee_Info[0]));
// Table.append(T_body);

// const main = document.getElementsByTagName("main");
// main[0].append(Table);


//////////////////////////////////////////////////////////////////////////



// function render (event) {
//   event.preventDefault();

//   let id = event.target.id.value; 
//   let name = event.target.name.value; 
//   let dept = event.target.idDepartment.value; 
//   let level = event.target.idLevel.value; 
//   let img = event.target.img.value; 

//   let newEmp = new Employee(id,name,dept,level,img);
//   allEmployees.push(newEmp);
//   saveToLocal();
//   print(newEmp);

//   document.forms[0].reset();
// }



// function print(employee){

//    let card = document.createElement('div');
//    cardsDiv.appendChild(card);

//    let img = document.createElement('img');
//    card.appendChild(img);
//    img.setAttribute('src',employee.imageURL);

//    let p = document.createElement('p');
//    card.appendChild(p);
//    p.textContent = "Name " + employee.fullName + "- ID " + employee.employeeID ;


//    let p2 = document.createElement('p');
//    card.appendChild(p2);
//    p2.textContent = `Department: ${employee.department} - Level: ${employee.level}`;

//    let p3 = document.createElement('p');
//    card.appendChild(p3);
//    p3.textContent = employee.salary;

// }