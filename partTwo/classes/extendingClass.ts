class Teacher {
    teach() {
        console.log("The surest test of discipline is its absence.");
    }
}

class StudentTeacher extends Teacher {
    learn() {
        console.log("I cannot afford the luxury of a closed mind.");
    }
}

const teacher = new StudentTeacher();
teacher.teach(); // Ok (defined on base)
teacher.learn(); // Ok (defined on subclass)
teacher.other();
// Error: Property 'other' does not exist on type 'StudentTeacher'.
const student = new StudentTeacher()
student.learn() // Ok
student.teach()


class Lesson {
    subject: string;
    constructor(subject: string) {
        this.subject = subject;
    }
}
class OnlineLesson extends Lesson {
    url: string;
    constructor(subject: string, url: string) {
        super(subject);
        this.url = url;
    }
}
let lesson: Lesson;
lesson = new Lesson("coding"); // Ok
lesson = new OnlineLesson("coding", "oreilly.com"); // Ok
let online: OnlineLesson;
online = new OnlineLesson("coding", "oreilly.com"); // Ok
online = new Lesson("coding");
// Error: Property 'url' is missing in type
// 'Lesson' but required in type 'OnlineLesson'.

// if all the members on a subclass already exist on its
// base class with the same type, then instances of the base class are still 
// allowed to be used in place of the subclass

class PastGrades {
    grades: number[] = [];
}
class LabeledPastGrades extends PastGrades {
    label?: string;
}
let subClass: LabeledPastGrades;
subClass = new LabeledPastGrades(); // Ok
subClass = new PastGrades(); // Ok