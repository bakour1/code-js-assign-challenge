// selectthe tag and set the style
document.querySelector("h1").style.color = "blue" ;

// set onload for load all the code before loaded page
window.onload = function () {
    document.querySelector("h1").style.color = "blue" ;
};


// alert
window.alert("hello from js file");

// write p or h1 or span 
document.write("<h1>hello <span>Page</span></h1>")


// write p or h1 or span  then selectthe tag and set the style
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


// create element
document.createElement("")

//  print in consol
console.log("hello from js file");
// log = like as loging or message

// print in consol with alert Error
console.error("message")
    console.log("Iam In Console");
    console.error("error 1")
    document.write("Iam In Page");
    console.error("error 1")

// print in consol the taple with index 
console.table(["osama", "sami", "ahmed"])
    console.table(["mohamad", "ali", "alhefel", "ahmad", "rami"]);

// create list group
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


// %C like as span for selecter what i will styling
console.log("hello from %cjs %cfile", "color:red; font-size: 40px", "color:blue; font-size: 40px")

    // 
    console.log("%cElzero %cWeb %cSchool",
    "color: red; font-size: 40px",
    "color: green; font-weight: bold font-size: 40px",
    "color: blue;  background-color: red; font-size: 40px",
    );
