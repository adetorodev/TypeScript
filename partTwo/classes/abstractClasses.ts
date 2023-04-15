// School class and its getStudentTypes method are marked as
// abstract. Its subclasses—Preschool and Absence—are therefore 
// expected to imple‐ment getStudentTypes

abstract class School{
    readonly name: string;

    constructor(name:string){
        this.name = name;
    }
    abstract getStudentTypes(): string[]
}

class PreSchool extends School {
    getStudentTypes() {
        return ["Preschooler"]
        
    }
}

class Absence extends School {}
// Non-abstract class 'Absence' does not implement inherited abstract member 
// 'getStudentTypes' from class 'School'

let school: School;
school = new PreSchool("Sunnyside Daycare")
school = new School()
// Cannot create an instance of an abstract class.

