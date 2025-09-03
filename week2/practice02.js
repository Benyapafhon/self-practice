// create compareStudent function to compare two students
// if id and name are equally with incase sensitive then they are the same student,
// otherwise they are different.
let student = {id: 1,name: "jung"}
let newStudent = {id:2,name: "Jung"}
let oldStudent = {id:1,name: "jung"}
function isStudentEqual (std1,std2) {
    return std1.name.toLowerCase() === std2.name.toLowerCase() && std1.id === std2.id
    //ใช้ฟังกะชั่น .toLowerCase() เพื่อignore case  สนแค่ตัวสะกด
}
 
console.log(isStudentEqual(student, oldStudent)); //true