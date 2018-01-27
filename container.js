var a1 = Array.of(3, 11, 8)
console.log(a1)
console.log(a1.length)

var a2 = Array(3, 11, 8)
console.log(a2)

// fill, 填充数组
a2.fill(7)
console.log("a2 after fill ", a2)
var a3 = new Array(3).fill(7)
console.log("a3 ", a3)

// 数组推导
// var a4 = [for (i of a1) i*2 ]
// console.log("a4 ", a4)

// 遍历 entries(), keys(), values()
for (var index of ['a', 'b'].keys()) {
    console.log("index: ", index)
}

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}

// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }

// filter 方法, 根据条件过滤
var filtedResult = a1.filter( e => e > 3)
console.log("element > 3: ", filtedResult)

// forEach
a1.forEach(e => console.log(e*e))

// map
var power = a1.map(e => e*e)
console.log("平方后: ", power)

// find 方法, 找出第一个满足条件的
var result = a1.find((v, index, arr) => v > 0)
var result2 = a1.find(v => v > 0)
console.log("first greater than 0: ", result)
console.log("first greater than 0: ", result2)

// findIndex 方法, 找出第一个满足条件的元素的索引
var resultIndex = a1.findIndex(v => v > 3)
console.log("first greater than 3 index: ", resultIndex)

var s = new Set()
a1.map(x => s.add(x))
console.log("value of set s: ", a1)
console.log("s set contains 3 ", s.has(3))

// for(let item of s.values) {
//     console.log("item -> ", item)
// }