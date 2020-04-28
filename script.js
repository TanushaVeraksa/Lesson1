let student1_1 = {
    name: "Sasha",
    age: 18,
    averageMark: 8.4,
    "likes programming": false
};

let student1_2 = {
    name: "Tanya",
    age: 20,
    averageMark: 7.8,
    "likes programming": true
};

let student1_3 = {
    name: "Masha",
    age: 17,
    averageMark: 7.5,
    "likes programming": false
};

let student1_4 = {
    name: "Nikita",
    age: 21,
    averageMark: 6.6,
    "likes programming": true
};

let students = [student1_1, student1_2, student1_3, student1_4];


for(let k in students)
    console.log(students[k]);