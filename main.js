var num1 =[10,20,30,40,10]
var addNum=num1.reduce((firstno,secondno)=>firstno+secondno)
console.log(addNum);
var names=['Ramani','Shankar']
var addname=names.reduce((fname,lname)=>fname.concat(lname))
console.log(addname);
var num1 =[10,20,30,40,10]
var subNum=num1.reduce((firstno,secondno)=>firstno-secondno)
console.log(subNum); 
var num1 =[10,20,30,40,10]
var mulNum=num1.reduce((firstno,secondno)=>firstno*secondno)
console.log(mulNum);
var num1 =[10,20,30,40,10]
var divNum=num1.reduce((firstno,secondno)=>firstno/secondno)
console.log(divNum);
var num1 =[50,9]
var modNum=num1.reduce((firstno,secondno)=>firstno%secondno)
console.log(modNum);