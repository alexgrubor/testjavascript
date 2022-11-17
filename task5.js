class Course {
    constructor (teacher,type, number) {
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }
    spaceNeeded() {
        return this.number *2 + 'm2'
    }
    details(){
        return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`
    }
}

let someCourse = new Course ('Mike','Web dev', '20' 
)

console.log(someCourse.spaceNeeded());
console.log(someCourse.details());