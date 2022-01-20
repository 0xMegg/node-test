
function definePersonClass() {
    function Person(name, age) {
        this.name = name;
        this.age = age;    
    }

    Person.prototype.getName = function() {
        return this.name;
    }
    Person.prototype.getAge = function() {
        return this.age;
    }
    Person.prototype.setName = function(name) {
        this.name = name;
    }
    Person.prototype.setAge = function(age) {
        this.age = age;
    }
    return Person;
}

function defineTeacherClass() {
    function Teacher(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    Teacher.prototype.getName = function() {
        return this.name;
    }
    Teacher.prototype.getAge = function() {
        return this.age;
    }
    Teacher.prototype.getSubject = function() {
        return this.subject;        
    }
    Teacher.prototype.setName = function(name) {
        this.name = name;
    }
    Teacher.prototype.setAge = function(age) {
        this.age = age;
    }
    Teacher.prototype.setSubject = function(subject) {
        this.subject = subject;
    }
    return Teacher;
}



function defineStudentClass() {
    function Student(name, age, subjects) {
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
    Student.prototype.getName = function() {
        return this.name;
    }
    Student.prototype.getAge = function() {
        return this.age;
    }
    Student.prototype.getSubjects = function() {
        return this.subjects;        
    }
    Student.prototype.setName = function(name) {
        this.name = name;
    }
    Student.prototype.setAge = function(age) {
        this.age = age;
    }
    Student.prototype.setSubjects = function(subjects) {
        this.subjects = subjects;
    }
    Student.prototype.addSubject = function(subject) {
        this.subjects.push(subject);
    }
    return Student;
}

function defineTeacherClass2() {
    function Person(name, age) {
        this.name = name;
        this.age = age;    
    }

    Person.prototype.getName = function() {
        return this.name;
    }
    Person.prototype.getAge = function() {
        return this.age;
    }
    Person.prototype.setName = function(name) {
        this.name = name;
    }
    Person.prototype.setAge = function(age) {
        this.age = age;
    }

    function Teacher(name, age, subject) {
        Person.call(this, name, age);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.constructor = Teacher;

    Teacher.prototype.getSubject = function() {
        return this.subject;
    }
    Teacher.prototype.setSubject = function(subject) {
        this.subject = subject;
    }
    return { Teacher, Person };
}

function defineStudentClass2() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.getName = function() {
        return this.name;
    };
    Person.prototype.getAge = function() {
        return this.age;
    };
    Person.prototype.setName = function(name) {
        this.name = name;
    };
    Person.prototype.setAge = function(age) {
        this.age = age;
    };

    function Student(name, age, subjects) {
        Person.call(this, name, age);
        this.subjects = subjects;
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    Student.prototype.getSubjects = function() {
        return this.subjects;
    }
    Student.prototype.setSubjects = function(newSubjects) {
        this.subjects = newSubjects;
    }
    Student.prototype.addSubject = function(subject) {
        this.subjects.push(subject);
    }
    
    return { Student: Student, Person: Person };
}

function defineEmployeeClass() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.getName = function() {
        return this.name;
    };
    Person.prototype.getAge = function() {
        return this.age;
    };
    Person.prototype.setName = function(name) {
        this.name = name;
    };
    Person.prototype.setAge = function(age) {
        this.age = age;
    };

    function Employee(id, name, age, department) {
        Person.call(this, name, age);
        this.id = id;
        this.department = department;
    }

    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Employee.prototype.getId = function() {
        return this.id;
    }
    Employee.prototype.setId = function(id) {
        this.id = id;
    }
    Employee.prototype.getDepartment = function() {
        return this.department;
    }
    Employee.prototype.setDepartment = function(department) {
        this.department = department;
    }

    return { Employee: Employee, Person: Person };
}

function defineRatingClass() {
    function Rating(bookId, activeShape, inactiveShape) {
        this.bookId = bookId;
        this.activeShape = activeShape;
        this.inactiveShape = inactiveShape;
        this.rating = null;
        this.ratingStatus = [1,2,3,4,5].map(_ => inactiveShape);
    };

    Rating.prototype.getBookId = function() {
        return this.bookId;
    };
    Rating.prototype.getActiveShape = function() {
        return this.activeShape;
    };
    Rating.prototype.getInactiveShape = function() {
        return this.inactiveShape;
    };
    Rating.prototype.getRating = function() {
        return this.rating;
    };
    Rating.prototype.getRatingStatus = function() {
        return this.ratingStatus;
    };
    Rating.prototype.setRating = function(rating) {
        this.rating = rating;
        for(let i = 0 ; i < 5; i++) {
            if (i < rating) {
                this.ratingStatus[i] = this.activeShape;
            }
            else {
                this.ratingStatus[i] = this.inactiveShape;
            }
        }
    }
    Rating.prototype.isTouched = function() {
        return !!this.rating;
    };

    return Rating;
}

var PrototypeQuiz = {
    definePersonClass,
    defineTeacherClass,
    defineStudentClass,
    defineTeacherClass2,
    defineStudentClass2,
    defineEmployeeClass,
    defineRatingClass,
};

module.exports = PrototypeQuiz;