// document.querySelector----------selectthe tag and set the style
{
document.querySelector("h1").style.color = "blue" ;
}
// window.onload-------------set onload for load all the code before loaded page
{
window.onload = function () {
    document.querySelector("h1").style.color = "blue" ;
};
}

//window.alert------------ alert
{
window.alert("hello from js file");
}
//document.write---------- write p or h1 or span 
{
document.write("<h1>hello <span>Page</span></h1>")

}
//document.write and css ..... write p or h1 or span  then selectthe tag and set the style
{
document.write("<h1>Elzero</h1>");
window.onload = function () {
    document.write("<h1>Elzero</h1>");
    document.querySelector("h1").style=
    "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial"
};
        // or
        document.write("<h1>Elzero</h1>");
        document.querySelector("h1").style=
        "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial"
        // or
        document.write("<h1>Elzero</h1>");
        document.querySelector("h1").style.color= "blue";
        document.querySelector("h1").style.fontSize = "80px";
        document.querySelector("h1").style.fontWeight = "bold";
        document.querySelector("h1").style.textAlign= "center";
        document.querySelector("h1").style.fontFamily= "Arial";
}

//document.createElement------- create element
{
document.createElement("")
}
//console.log------------  print in consol
{
console.log("hello from js file");
// log = like as loging or message
}

//console.error ---------- print in consol with  Error
{
    console.error("message")
    console.log("Iam In Console");
    console.error("error 1")
    document.write("Iam In Page");
    console.error("error 1")
}

//console.table ----------- print in consol the taple with index 
{
console.table(["osama", "sami", "ahmed"])
    console.table(["mohamad", "ali", "alhefel", "ahmad", "rami"]);
}

//console.group---------- create list group
{
console.group("group");
console.log("message one");
console.log("message two");
console.group("child group");
console.log("message one");
console.log("message two");
console.group("grand child group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("group 2");
console.log("message one");
console.log("message two");
}
