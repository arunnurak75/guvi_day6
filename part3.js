//Part 3: Find the culprits and nail them — debugging javascript
//Fix the code to get the largest of three.
const aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else {
    console.log(t)}
   }
   aa(1,2,3);

//Fix the code to Sum of the digits present in the number
let n = 123;

function add(n)
{
let summ = 10;
for(var i=0;i<n.length;i++){
 summ+=n[i]
 }
 return summ;
}
console.log(add(n));

//Fix the code to Sum of all numbers using IIFE function
(function() {
    let arr = [9,8,5,6,4,3,2,1]
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum
})()

 //Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num/2;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num!==0;
});
console.log(myPrime);

//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = num.reduce((a, b) =>{
 return a + b
 
})
console.log(sum);

//Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1))
 }
})();

//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();

//Fix the code to reverse.
(function(str){
    var  str1 = str.split("").reverse().join("");
      console.log(str1); 
     })("abcd")

//Fix the code to remove duplicates.
let newArr = [];
var res = function(arr){
    for(var i=0; i < arr.length; i++){
    
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"])

//Fix the code to give the below output: 
 var arrayy =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
 [["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
  var final=[]
  
 while(arrayy.length!==0)
 {
  var outer_remove = arrayy.shift();
 var new_object={}
  while(outer_remove.length !==0)
  {
 
  var inner_remove = outer_remove.shift()
  var keyy = inner_remove[0]
  var valuee =inner_remove[1]
  new_object[keyy]=valuee
  }
 final.push(new_object)
 }
 console.log(final)

//Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var oddNumbers = as.filter(function(item) {
   return (item % 2 !== 0);
})
var total = oddNumbers.reduce(function(tot, curr) {
    return tot + curr})

console.log(total);

// Swap the odd and even digits
aa =(data)=>{
    var a=data;
    var l='';
   for(i=0;i<a.length;i++){
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");
