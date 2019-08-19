// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array,
// to studentFeedback (as shown in comments below)

const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 },
];

const transform = student => {
  if (student.grade >= 90) {
    return `Excellent Job ${student.name}, you got an a`;
  } else if (student.grade >= 80) {
    return `Nice Job ${student.name}, you got an b`;
  } else if (student.grade >= 70) {
    return `Well done Job ${student.name}, you got an c`;
  } else if (student.grade >= 60) {
    return `What happened Job ${student.name}, you got an d`;
  } else if (student.grade >= 50) {
    return `Not good Job ${student.name}, you got an f`;
  } else {
    return `You suck`
  }
}
const studentFeedback = studentGrades.map(transform);

console.log(studentFeedback);

// console.log();
/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
]; 
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console



// james solutions

const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54}, 
];

const messages = {
  a: 'Excellent Job',
  b: 'Nice Job',
  c: 'Well done',
  d: 'What happened',
  f: 'Not good',
};

function letterGrade(points){
  if(points >= 90){
    return 'a';
  } else if (points >= 80){
    return 'b'; 
  } else if (points >= 70){
    return 'c'; 
  } else if (points >= 60){
    return 'd'; 
  } else {
    return 'f'; 
  }
}

function feedBack(feedBackRules){
  return function(student){
    const grade = letterGrade(student.grade);
    const message = feedBackRules[grade];
    return `${message} ${student.name}, you got an ${grade}`;
  }
}

const gradeFeedback = studentGrades.map(feedBack(messages));