class Employee {
    
    constructor(name, empId) {
        this.name = name;
        this.id = empId;
    }
}

emp1 = new Employee("Nicholas", 1005);
emp2 = new Employee("Sheldon", 1050);

console.log(emp1.name + " - " + emp1.id);
console.log(emp2.name + " - " + emp2.id);
