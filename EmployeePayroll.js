class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    constructor(...parameters){
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }

    get name(){ return this._name; }
    set name(name){ this._name = name; }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined": this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());