//1-masala
// let num = [4,5,3];
// let res =num.reduce(function(a,b)  {return a+b},0);
// console.log(res / 2);

//2-MASALA
// let num = [4,5,3,7,6,9,8,5,1,2,];
// for(let i=0; i<num.length; i++){
//     if(num[i]%2==1) {
//         console.log(num[i]);
//     }
// }


//3-MASALA
// let num =[4,2,6,4,6,5,3,4];
// let numPlus = num.reduce((a,b) => a + b, 0);
// console.log(numPlus);

//4-MASLA
// let num = [4,5,6,2,13,6,7,5,4,6,2];
// let arr =[];
// for(let i =0; i<num.length; i++){
//     if(num[i]%2==0){
//      continue
//     } else if(num[i]%2==1){
//         arr.push(num.reduce((a,b) => a + b, 0))
//     }
// }
// console.log(arr.pop());
// let n1 = num.reduce((a,b) => a-b, 1);
// console.log(n1);


//5-masala
// let num = [4,5,7,8,9,5,6];
// let num1 = num.reduce((n,num) => n + num, 0);
// console.log(num1);

//6-maslal
// let num = [4,5,3,7,6,9,8,5,1,2,];
// let res = num.reverse()
// console.log(res);

//7-MASALA
// let users = [
//     {
//         name: "Aziz",
//         age: 22,
//     },
//     {
//         name: "Avaz",
//         age: 18,
//     },
//     {
//         name: "Laziz",
//         age: 45,
//     },
// ];

// for(let i = 0; i < users.length; i++){
//     if(users[i + 1]){
//         let difference = users[i].age - users[i + 1].age;
//         if(difference < 0){
//             console.log(`${users[i].name} ${Math.abs(difference)} yosh kichkina ${users[i + 1].name} dan` )
//         }
//         else{
//             console.log(`${users[i].name} ${Math.abs(difference)} yosh katta ${users[i + 1].name} dan` )
//         }
//     }
// }
// let dif = users[users.length - 1].age - users[0].age;

// console.log(`${users[users.length - 1].name} ${Math.abs(dif)} yosh ${dif < 0 ? "kichik" : "katta"} ${users[0].name} dan `)



//8-MASALA
// let num = [4,5,3,7,6,9,8,5,1,2,];
// let num1 = num.reduce((n,product) => n + product, 0);
// console.log(num1);

//9-masala
// let num = [4,5,3,7,6,9,8,5,1,2,];
// let arr = [];
// for(let i=0; i<num.length; i++){
//     if(num[i]%2==0) {
//         arr.push(num[i])
//     }
// }
// let res = arr.sort();
// console.log(res.splice(-1));

//10-MASALA
// let num = [4,5,3,7,6,9,8,5,1,2,];
// let arr = [];
// for(let i=0; i<num.length; i++){
//     if(num[i]%2==0) {
//         arr.push(num[i])
//     }
// }
// let res = arr.sort();
// console.log(res.splice(0,1));

//11-MASALA
// let num = [4,5,3,7,6,9,8,5,1,2,];
// let arr = [];
// for(let i=0; i<num.length; i++){
//     if(num[i]%2==1) {
//         arr.push(num[i])
//     }
// }
// let res = arr.sort();
// console.log(res.splice(5));
// let a 'efwew';
// let b = a.console.assert(expression, object);

