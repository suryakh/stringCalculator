 import addNumbers from './stringCalculator/addNumbers'


// all scenario's list 
console.log(addNumbers("3,4,7"))
console.log(addNumbers("3,4\n,7\n"))
console.log(addNumbers("//$3\n$4\n$7$\n"))
console.log(addNumbers("//$3$4\n$7$\n"))
console.log(addNumbers("3,4,7,1001"))
console.log(addNumbers("//$3$4\n$7$1000$1001\n"))
console.log(addNumbers('//*%$3$4$$$%$$7%\n'))
console.log(addNumbers('//*%$3$4$$$%$$7%\n'))
console.log(addNumbers('//****3****4*****7***\n'))
// console.log(addNumbers("3,-4,-7"))
console.log(addNumbers("//$3$4\n$-7$\n"))