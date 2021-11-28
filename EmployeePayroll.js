class EmployeePayrollData {

    constructor(...parameters){
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }

    get name(){ return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get id(){ return this._id; }
    set id(id){
        let idRegExp = RegExp('^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$');
        if(idRegExp.test(id))
            this._id = id;
        else throw 'Id is Incorrect!';
    }

    get salary(){ return this._salary; }
    set salary(salary){
        let salaryRegExp = RegExp('^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$');
        if(salaryRegExp.test(salary))
            this._salary = salary;
        else throw 'salary is Incorrect!';
    }

    get gender(){ return this._gender; }
    set gender(gender){
        let match = RegExp('^(?:m|M|f|F)$');
        if(match.test(gender))
            this._gender = gender;
        else throw 'Gender must be F of M';
    }

    get startDate(){ return this._startDate; }
    set startDate(startDate){
        //let date = startDate.toLocaleDateString();
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let date = new Date().getDay();
        if(year >= startDate.getFullYear() || month >= startDate.getMonth() || date >= startDate.getDay())
            this._startDate = startDate;
        else throw 'Startdate could not be Future Date';
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined": this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(12, "Mark", 30000, "M", new Date(2018, 11, 24));
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(14, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
try{
    newEmployeePayrollData.id = 0;
    console.log(newEmployeePayrollData.id);
}catch (e){
    console.error(e);
}
try{
    newEmployeePayrollData.salary = -100;
    console.log(newEmployeePayrollData.salary);
}catch (e){
    console.error(e);
}
try{
    newEmployeePayrollData.gender = 'Male';
    console.log(newEmployeePayrollData.gender);
}catch (e){
    console.error(e);
}
try{
    newEmployeePayrollData.startDate = new Date(2022, 11, 24);
    console.log(newEmployeePayrollData.startDate);
}catch(e){
    console.log(e);
}
