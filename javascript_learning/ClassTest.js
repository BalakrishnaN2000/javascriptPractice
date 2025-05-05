class Employee {
    firstname = "John";
    id = "101";

    getEmpDetails() {
        return this.firstname + " " + this.id;
    }
}

emp1 = new Employee();
console.log(emp1.getEmpDetails());
