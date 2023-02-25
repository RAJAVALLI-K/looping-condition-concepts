//function
function sample() {
    let a = 10, b = 10, c;
    c = a + b;
    return c;
}

let result = sample();
console.log(result);


function sample1(a, b) {
    let c = a + b;
    let d = a - b;
    let f = a * b;
    let e = a / b;
    console.log(c);
    console.log(d);
    console.log(f);
    console.log(e);
}
sample1(8, 3);
sample1(19, 4);
sample1(5, 5);
sample1(10, 5);


//while

let i=10;
while(i<=15){
     document.write("correct sentence");
    document.write("<br>")
    i++;
}


//do-while

let j=1;
do{
    document.write(j);
    document.write("<br>")
    j++;
    if(j==10){
        break;
        //continue;
    }
}
while(j<=15);


var k=4;
k<=5?"posiitve":"nagative";
console.log(k);



let num=40;
do{
    console.log(num);
    num++
}
while(num<=60);


for(let v=60; v<=80; v++){
    console.log(v);
}

var number=prompt('enter a number:');
if(number>=1){
    alert('number is positive');
}
else if(number==0){
    alert('number is zero');
}
else{
    alert('number is negative');
}


var a = -30, b = 0, c = 70, d = -50;
if (a > b && a > c && a > d) {
    console.log('the number is a  large number:-30');
}
else if (b > a && b > c && b > d) {
    console.log('the number is b  large number:0');
}
else if (c > a && c > b && c > d) {
    console.log('the number is c  large number:70');
}
else {
    console.log('the number is d  large number:-50');
}

var num1=prompt('enter a number:');
if(num1%2==0){
    alert('number is even');
}
else{
    alert('number is odd');
}

var num1=prompt('enter a number:');
if(num1%5==0){
    alert('number is 5 divisible');
}
else{
    alert('number is not 5 divisible');
}


var num1=prompt('enter a number:');
if(numl%7==0){
    alert('number is 5 divisible');
}
else{
    alert('number is not 5 divisible');
}
