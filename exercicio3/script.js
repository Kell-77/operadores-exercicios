let cinco = 5 
let quinze = 15
let dois = 2
let vinte = 20

const variavel = 
console.log(cinco > quinze && cinco < dois)

console.log(cinco === cinco === "5")

console.log(cinco > quinze)

console.log( cinco > quinze &&  quinze >vinte)

//=====================================

const salario = 2000
const auxilio = 45.50 * 2
const comissao = 0.10
const descInss = 0.05
console.log("seu salario com auxilio",salario+auxilio)

const janeiro = 5784.50 * 0.1
let ja = ((janeiro+salario+auxilio)-descInss)
console.log("salario de janeiro", ja)

const fevereiro = 3418.41 * 0.1
let fe = ((fevereiro+salario+auxilio)-descInss)
console.log("salario de fevereiro", fe)

const marco = 4124.10 * 0.1
let ma = ((marco+salario+auxilio)-descInss)
console.log("salario de março", ma)

const abril =1874.00 * 0.1
let ab = ((abril+salario+auxilio)-descInss)
console.log("salario de abril", ab)

const maio =  7000.00 * 0.1
let mai = ((maio+salario+auxilio)-descInss)
console.log("salario de maio", mai)

const junho=  9450.00 * 0.1
let ju = ((junho+salario+auxilio)-descInss)
console.log("salario de junho", ju)

let totalDe6 = ((ja+fe+ma+ab+mai+ju*6)/6)
console.log("sua media dos ultimos 6 meses",totalDe6)
