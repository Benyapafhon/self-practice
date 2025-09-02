const pets = { 
    cat: {
    name: "mongkol",
    hello: function () {return "Hello"}
    // hello(){return "Hello"} มันคือๆกัน
}
};
// เก็บ func แสดงว่า value ของhelloเป็นkey ที่เก็บเfunc
console.log(pets.cat.name); //mongkol
console.log(pets.cat.hello()); //Hello ฟังก์ชันมีวงเล็บเพื่อส่งพารามิเต้อ
pets.dog={name:"pood"}