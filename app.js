//constructor 


const Employee_Information = function (Employee_ID, Full_Name, Department, Level, Image_URL, Salary){
    this.Employee = Employee_ID;
    this.Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image_URL;
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

for (const Employee_Information of employee_Info) {
    console.log(Employee_Information.Full_Name + " " + Employee_Information.Salary);
}
