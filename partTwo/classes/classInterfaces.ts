interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number): void {
        for (let i = 0; i < hours; i += 1) {
            console.log("...studing...")
        }
    }
}


class Slacker implements Learner {
    //     Class 'Slacker' incorrectly implements interface 'Learner'.
    //   Property 'study' is missing in type 'Slacker' but required in type 'Learner
    name = "Rocky";

    // study(hours:number): void {
    //     for (let i = 0; i < hours; i += 1) {
    //         console.log("...studing...")
    //     }
    // }
}

// class Student implements Learner {
//     name;
//     // Error: Member 'name' implicitly has an 'any' type.
//     study(hours) {
//         // Error: Parameter 'hours' implicitly has an 'any' type.
//     }
// }

// Implementing an interface is purely a safety check.

// Implementing Multiple Interfaces

interface Graded {
    grades: number[];
}
interface Reporter {
    report: () => string;
}

class ReportCard implements Graded, Reporter {
    grades: number[];
    constructor(grades: number[]) {
        this.grades = grades;
    }
    report() {
        return this.grades.join(", ");
    }
}

interface AgeIsANumber {
    age: number;
}
interface AgeIsNotANumber {
    age: () => string;
}
class AsNumber implements AgeIsANumber, AgeIsNotANumber {
    age = 0;
    // ~~~
    // Error: Property 'age' in type 'AsNumber' is not assignable
    // to the same property in base type 'AgeIsNotANumber'.
    // Type 'number' is not assignable to type '() => string'.
}