// // alert("hey!!");

// var myVariable;

// //this is a case sensitive variable.



// const table = 5;
// console.log(table);

// var myName = "null";
// console.log(myName);

// var foo = 5;
// var foo = "5";
// console.log(foo);

// var socket = "not working";
// console.log(socket);

// var myName = "timi";
// console.log(myName);

// var myClass = "boring";
// console.log(myClass);

// var minhjm = "michael";

// var goo = 3 + "3";
// console.log(goo);

// var myNames = "timi" + " onifara";
// console.log(myNames);

// var gym = "2" + "3" + "5";
// console.log(gym);

// var ting = "vibes" + 2;
// console.log(ting);

// var isSocketSpoilt = false;
// console.log(isSocketSpoilt);

// var michael = ["michael", "rice"];
// console.log(michael[1]);
// if (michael [1] === 18) {
//     console.log("this is equals to 18");
// }else {
//     console.log("this is not equals to 18");
// }



// if(1 === 2) {
//     console.log("1 is equal to 2");
// }else {
//     console.log("1 is not equals to 2");
// }

// // let table = 5;

// // const table = 5;



// var friends=["olamide", "adejoke"," samson","femi"];
//   console.log(friends[3]);


//   var name= "micheal";

//  var name="jenifer"
//  console.log(name);
//  if(name === "jennifer"){
//  console.log( " that my name too")
//  }else{
//     console.log("thats not my name")
//  }



 

//  var myVariable=1;
//  console.log (myVariable);
//  if( myVariable===5){
//  console.log("upper" );
//  }else{
//     console.log( "lower")
//  }


// for(var i = 0; i <= 2; i++){
//     // alert(i);
// }


// var items = ["laptop", "table", "chair"];
// for(var i = 0; i < items.length; i++){
//     alert(items[i]);
// }

// var hey = "NeoLife";

// alert(hey);

// function game () {
//     game("our function just ran");
// }

// var ade = 2;

// if(ade === 2) {
//     prompt("write your name");
// }

// function alertArraySize (arr) {
//     alert(arr.length);
// }

// var test = [1,2,3,4,5];
// alertArraySize(test);



// var myFunction = () => {
//     style.color = "white"
// }

window.onclick = myFunction;
 
// function mybutton() {
//     alert ("button click")
// }
// function myFunction() {
//     alert('Event handler')
// }

// function validate form(){
//     var name=document.myform.name.value;
//     var password=document.myform.password
// }

// if(name==null||name==""){
//     alert("name can't be blank");
//     return false:
// } else if(password.length<6){
//     alert(password must be at least 6 character)
//     return false;
// }

// function validateForm() {
//     let x = document.forms["myForm"] ["fname"].value;
//     if (x == "") {
//         alert("name must be filled out")
//         return false;
//     }
// }

function myFunction() {
    let x = document.getElementById("number").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        alert("input not valid");
    } else {
        alert("input OK");
    }
}