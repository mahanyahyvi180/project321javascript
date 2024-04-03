
var myMessage=document.getElementById("message");

function showMessage(){

    myMessage.className="show";

}
setTimeout(showMessage,300);
/* function setUpEvents(){

    var content=document.getElementById("content");
    var button=document.getElementById("show-more");

    button.onclick=function(){
        if(content.className=="open"){
            content.className="";
            button.innerHTML="Show More";
        }
        else{
            content.className="open";
            button.innerHTML="Show Less";
        }
    };
}
window.onload=function(){
    setUpEvents();
}; */
 /* var content=document.getElementById("content");
var button=document.getElementById("show-more");

button.onclick=function(){
    if(content.className=="open"){
        content.className="";
        button.innerHTML="Show More";
    }else{
        content.className=="open";
        button.innerHTML="Show Less";
    }
};  */


/* var birthday=new Date(1985,0,15,11,15,25);
/* var birthday2=new Date(1985,0,15,11,15,25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime==birthday2.getTime){

    console.log("birthday are equal");

    
}else{
    console.log("birthday are note equal");
} */
/* var birthday=new Date(1985,0,15,11,15,25);
var birthday2=new Date(1985,0,15,11,15,25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday==birthday2){

    console.log("birthday are equal");

}else{
console.log("birthday are note equal");
} */
/* var birthday=new Date(1985,0,15,11,15,25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getTime());
console.log(birthday.getHours()); */
/* var mypastDate=new Date(1545,10,8);
var myFutureDate=new Date(2099,12,9);

console.log(mypastDate);
console.log(myFutureDate); */
/* var myDate=new Date();
console.log(myDate); */
/* var car=function(maxSpeed,driver){
    this.maxSpeed=maxSpeed;
    this.driver=driver;
    this.drive=function(speed,time){
        console.log(speed*time);
    };
    this.logDriver=function(){
        console.log(" نام راننده "+this.driver);
    };
}
var myCar=new car(70,"ماهان یحیوی");
var myCar2=new car(50,"مجید یحیوی");
var myCar3=new car(30,"مهناز یحیوی");
var myCar4=new car(20,"امین یحیوی");
var myCar5=new car(10,"پرویز یحیوی");

myCar.drive(50,3);
myCar3.logDriver(); */
/* var myCar2={
    maxSpeed:70,
    driver:" ماهان است ",
    drive:function(speed,time){
        console.log(speed*time);
    },
    logDrive:function(){
        console.log(" نام راننده "+this.driver);
    }
};
myCar2.logDrive();
console.log(myCar2.maxSpeed);
myCar2.drive(50,3); */
/* var myCar2={
    maxSpeed:70,
    driver:"اینترنت ماهان",
    drive:function(speed,time){
        console.log(speed*time);
    },
    test:function(){
        console.log(this);
    }
};
myCar2.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50,3); */

/* var myCar2={maxSpeed:70,driver:"اینترنت ماهان",drive:function(speed,time){console.log(speed*time);}};
console.log(myCar2.maxSpeed);
myCar2.drive(50,3); */
/* var myArray=new Array();
myArray[0]=8;
myArray[1]="hello";

var myCar=new Object();
myCar.maxSpeed=50;
myCar.driver="ماهان";
myCar.drive=function(){console.log("در حال رانندگی");};
myCar.drive();

var myCar2={maxSpeed:70,driver:"اینترنت ماهان",drive:function(speed,time){console.log(speed+time);}};
console.log(myCar2.maxSpeed);
myCar2.drive(50,3); */
/* var myArray=new Array();
myArray[0]=8;
myArray[1]="hello";

var myCar=new Object();
myCar.maxSpeed=50;
myCar.driver="ماهان";
myCar.drive=function(){console.log("در حال رانندگی");};
myCar.drive();

var myCar2={maxSpeed:70,driver:"اینترنت ماهان",drive:function(){console.log("در حال رانندگی است");}};
console.log(myCar2.maxSpeed);
myCar2.drive(); */

/* var myArray=new Array();
myArray[0]=1;
myArray[1]="hello";

var myCar=new Object();
myCar.maxSpeed=50;
myCar.driver="ماهان";

myCar.drive=function(){console.log("درحال رانندگی");};
myCar.drive(); */
/* var myArray=new Array();

myArray[0]=8;
myArray[1]="hello";

var myCar=new Object();

myCar.maxSpeed=50;
myCar.driver="ماهان";

console.log(myCar.driver); */
/* var string1="abc";
var string2="Abc";

console.log(string1<string2); */
/* var string1="abc";
var string2="bcd";

console.log(string1<string2); */
/* var string1="abc";
var string2="ABC";

console.log(string1.toLowerCase==string2.toLowerCase); */
/* var string1="abc";
var string2="ABC";

console.log(string1==string2); */
/* var string1="abc";
var string2="abc";

console.log(string1==string2); */
/* var string1="abc";
var string2="bcd";

console.log(string1===string2); */
/* var myString='I\'m a "fun mahan" string';

if(myString.indexOf("mahan")===-1){
    console.log("کلمه کلیدی ماهان خارج از رشته است");
}else{
    console.log("کلمه کلید ماهان در این موقعیت قرار دارد"+myString.indexOf("mahan"));
} */
/* var myString='I\'m  a "fun" string';
if(myString.indexOf("mahan")){
    console.log("کلمه کلیدی ماهان در رشته وجود ندارد");
} */
/* var myString='I\'m a "fun" string';
if(myString.indexOf("ماهان")){
    console.log("کلمه کلیدی ماهان در رشته وجود ندارد");
} */
/* var myString='I\'m a "fun" string';
console.log(myString.indexOf("mahan")); */
/* var myString='I\'m a "fun" string';
console.log(myString.indexOf("string")); */
/* var myString='I\'m a "fun" string';
console.log(myString.toLowerCase()); */
/* var myString='I\'m a "fun" string';
console.log(myString.toUpperCase()); */
/* var myString='I\'m a "fun" string';
console.log(myString.length); */
/* var myString='I\'m a "fun" string';

console.log(myString); */
/* var a=7;
var b=5;

if(isNaN(a)){

    console.log("حتی یک عدد ضخیم است");
}
else{
    console.log("معنای واقعی زندگی است"+(a+b));
} */
/* var a="apple";
var b=5;

if(isNaN(a)){
    console.log("حتی یک عدد ضخیم است");
}
else{
    console.log("معنای واقعی زندگی است"+(a+b));
} */
/* var a="apple";
var b=5;

console.log(a*b); */
/* var a="7";
var b=5;

console.log(a*b); */
/* var a=7;
var b=5;

console.log(a+b);

console.log(Math.PI); */
/* var a=7;
var b=5;

console.log(a+b);

console.log(Math.max(7,4,9,8)); */
/* var a=7;
var b=5;

console.log(a+b);

console.log(Math.ceil(7.2)); */
/* var a=7;
var b=5;

console.log(a+b);

console.log(Math.floor(7.2)); */


/* var a=7;
var b=5;

console.log(a+b);

console.log(Math.floor(7.8)) */
/* var a=7;
var b=5;

console.log(a+b);
console.log(Math.round(7.8)); */
/* var a="7";
var b=5;

console.log(a+b);
console.log(typeof(a+b)); */
/* var a=7;
var b=5;

console.log(a+b);
console.log(typeof(a+b)); */
/* var a="5";
var b=5;

console.log(a+b);
 */

/* var a=5;
var b=5;

console.log(a+b); */
/* var average=0;
function getAverage(a,b){
    average=(a+b)/2;
    console.log(average);
    return average;
}

var myResult=getAverage(7,11);

function logResult(){

    console.log("میانگین"+myResult+"این تابع");
}
logResult(); */
/* function getAverage(a,b){
    var average=(a+b)/2;
    console.log(average);
    return average;
}
var myResult=getAverage(7,11);

function logResult(){
    console.log("میانگین"+myResult+"داخل تابع");
}
logResult(); */
/* function getAverage(a,b,c,d,e,f){
    var average=(a+b+c+d+e+f)/6;
    console.log(average);
    return average;
}
var myresult=getAverage(7,8,9,10,11,12);
console.log("نتیجه میانگین این عدد"+myresult); */
/* function getAverage(a,b){
    var average=(a+b)/2;
    console.log(average);
    return average;
}
var myresult=getAverage(7,8);
console.log("نتیجه میانکین این عدد"+myresult); */
/* function getAverage(a,b){
    var average=(a+b)/2;
    console.log(average);
}
getAverage(7,12); */
/* var links=document.getElementsByTagName("a");

for(i=0;i<links.length;i++)
{
    links[i].className="links"+i;
} */
/* for(i=0;i<10;i++)
{
    if(i==3||i==5){
        continue
    }
    console.log(i);
    if(i===7){
        break;
    }
}
console.log("من از حلقه خارج شدم"); */
/* for(i=0;i<10;i++)
{
    console.log(i);
    if(i==7){
    
        break;
    }
}
console.log("من از حلقه خارج شدم") */


/* var links=document.getElementsByTagName("a");

for(i=1;i<=links.length;i++)
{
    console.log("این شماره لینک است"+i);
}
document.write("همه لینک ها حلقه شده اند"); */

/* for(age=5;age<10;age++)
{
    console.log("سن شما کمتر از 10 سال است");
}
document.write("سن شما الان بالای 10 سال است"); */
/* var age=5;

while(age<10)
{
    console.log("سن شما کمتر از 10 سال است");
    age++;
}
document.write("سن شما الان بالای 10 سال است")  */
/* var myAge=25;

if(myAge<18||myAge>30||myAge===25)
{
    document.write("تو نمیتونی بیای");
    
}else{
    
    document.write("تومیتونی بیای رفیق باحال");
} */

/* var myAge=35;

if(myAge>18||myAge<30)
{
    document.write("تو میتونی بیای رفیق باحال");
}
else{
    
    document.write("تو نمیتونی بیای");
}
 */
/* var myAge=25;

if(myAge>=18&&myAge<=30)
{
    document.write("تو میتونی بیای رفیق باحال")
}else{
    document.write("تو نمیتونی بیای")
} */



/* var myAge=31;

if(myAge>30)
{
    document.write("شما بالای 30 سال سن دارید");
}

else if(myAge>20)
{
    document.write("شما بالای 20 سال سن دارید");
}

else if(myAge>10)
{
    document.write("شما بالای 10 سال سن دارید");
}


else
{
    document.write("شما زیر 10 سال سن دارید");
}
 */






















