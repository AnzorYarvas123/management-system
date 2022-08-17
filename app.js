// constructor 


const Employee_Information = function (Employee_ID, Full_Name, Department, Level, Image_URL, Salary){
    this.Employee = Employee_ID;
    this.Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.Salary = Salary(Level);



    function Salary(Level) {
        switch (Level) {
            case "Senior":
                return Randoms(1500, 2000);
            case "Mid-Senior":
                return Randoms(1000, 1500);
            case "Junior":
                return Randoms(500, 1000);
        }
    }

//Random Salary

    function Randoms(Min, Max) {
        Min = Math.ceil(Min);
        Max = Math.floor(Max);
        return Math.floor(Math.random() * (Max - Min) + Min);
    }
}



//Print Full Name and Salary

let employee_Info = [
    new Employee_Information("1000", "Ghazi Samer", "Administration", "Senior"),
    new Employee_Information("1001", "Lana Ali", "Finance", "Senior"),
    new Employee_Information("1002", "Tamara Ayoube", "Marketing", "Senior"),
    new Employee_Information("1003", "Safi Walid", "Administration", "Mid-Senior"),
    new Employee_Information("1004", "Omar Zaid", "Development", "Senior"),
    new Employee_Information("1005", "Rana Salah", "Development", "Junior"),
    new Employee_Information("1006", "Hadi Ahmad", "Finance", "Mid-Senior"),
]



let Table = document.createElement("table");

let T_body = document.createElement("tbody");


for (const Employee_Information of employee_Info) {
    console.log(Employee_Information.Full_Name + " " + Employee_Information.Salary);

     Table_Body(Employee_Information);
}



/////////////////////////////////////////////////////////////////////////////////


function T_Head(Employee_Information) {

    let table_head = document.createElement("thead");
    let tr = document.createElement("tr");

    for (const Loops of Object.entries(Employee_Information)) {

        if (Loops[0]) {
            let th = document.createElement("th");
            th.textContent = Loops[0];
            tr.append(th);
        }
    }



    table_head.append(tr);

    return table_head;
}




function Table_Body(Employee_Information) {

    let tr = document.createElement("tr");

    for (const loop of Object.entries(Employee_Information)) {
        if (loop[0]) {
            let th = document.createElement("th");
            th.textContent = loop[1];
            tr.append(th);
        }
    }

    T_body.append(tr);
}

Table.append(T_Head(employee_Info[0]));
Table.append(T_body);

const main = document.getElementsByTagName("main");
main[0].append(Table);


//////////////////////////////////////////////////////////////////////////



