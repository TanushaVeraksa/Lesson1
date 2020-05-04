let student1_1 = {
    firstName: "Sasha",
    lastName: "Veraksa",
    age: 18,
    grades: [4, 3, 5, 4, 5],
    course: 2,
    gender: "male",
};

let student1_2 = {
    firstName: "Tanya",
    lastName: "Veraksa",
    age: 20,
    grades: [4, 3, 5, 4, 3],
    course: 3,
    gender: "female",
};

let student1_3 = {
    firstName: "Masha",
    lastName: "Pikuza",
    age: 17,
    grades: [3, 1, 2, 3, 2 ],
    course: 1,
    gender: "female",
};

let student1_4 = {
    firstName: "Nikita",
    lastName: "Stepanov",
    age: 21,
    grades: [4, 3, 2, 2, 3],
    course: 4,
    gender: "male",
};

let student1_5 = {
    firstName: "Nataliya",
    lastName: "Romanova",
    age: 22,
    grades: [4, 5, 5, 4, 5],
    course: 4,
    gender: "female",
};

let student1_6 = {
    firstName: "Ivan",
    lastName: "Chernov",
    age: 20,
    grades: [2, 3, 1, 4, 3],
    course: 3,
    gender: "male",
};

let student1_7 = {
    firstName: "Slava",
    lastName: "Kozlovski",
    age: 20,
    grades: [5, 5, 5, 4, 5],
    course: 4,
    gender: "male",
};

let student1_8 = {
    firstName: "Kristina",
    lastName: "Lis",
    age: 21,
    grades: [4, 3, 5, 4, 5],
    course: 4,
    gender: "female",
};

let student1_9 = {
    firstName: "Vladislav",
    lastName: "Yarosh",
    age: 19,
    grades: [1, 2, 3, 3, 2],
    course: 2,
    gender: "male",
};

let student1_10 = {
    firstName: "Irina",
    lastName: "Lis",
    age: 21,
    grades: [4, 3, 5, 4, 5],
    course: 4,
    gender: "female",
};


let students = [
    student1_1, student1_2, student1_3, student1_4, student1_5,
    student1_6, student1_7, student1_8, student1_9, student1_10,
]


for(let i = 0; i<students.length; i++) {
    let studentGrades = students[i].grades;
    let studentGender = students[i].gender;
    let studentAge = students[i].age;
    let sum = 0;

    for(let j = 0; j<studentGrades.length; j++) {
    sum += students[i].grades[j];
    }

    let averageMark = sum/studentGrades.length;
    if(studentAge >= 18 && studentAge < 27 && averageMark < 3 && studentGender === "male") {
        students[i]["isReadyForArmy"] = true;
        delete students[i].grades;
        delete students[i].course;
    }  
}

let studentsReadyForTheArmy = [];

for(let i = 0; i<students.length; i++) {
    if(students[i]["isReadyForArmy"] == true) {
        studentsReadyForTheArmy.push(students[i]);
    }
}

for(let k in studentsReadyForTheArmy) 
    console.log(studentsReadyForTheArmy[k]);