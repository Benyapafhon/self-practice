// ให้เขียนฟังก์ชัน makeMultiplier (ใช้ closure) ที่รับเลข x แล้ว return ฟังก์ชันใหม่ที่นำเลข y มาคูณกับ x
// const times3 = makeMultiplier(3);
// console.log(times3(5)); // 15

function makeMultiplier(x) {
    return function (y) {
        return x * y
    }
}

const times3 = makeMultiplier(3)
const times5 = makeMultiplier(5)
console.log(times3(5)); //15
console.log(times5(2)); //10
