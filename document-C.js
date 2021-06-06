
//======>  document.querySelector----------selectthe tag and set the style
{
document.querySelector("h1").style.color = "blue" ;
}
//======>  window.onload-------------set onload for load all the code before loaded page
{
window.onload = function () {
    document.querySelector("h1").style.color = "blue" ;
};
}

//======> window.alert------------ alert
{
window.alert("hello from js file");
}
//======> document.write---------- write p or h1 or span 
{
document.write("<h1>hello <span>Page</span></h1>")

}
//======> document.write and css ..... write p or h1 or span  then selectthe tag and set the style
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

//======> document.createElement------- create element
{
document.createElement("")
}
//======> console.log------------  print in consol
{
console.log("hello from js file");
//======>  log = like as loging or message
}

//======> console.warn ---------- print in consol with  warn
{
    console.warn("More of level 3");
}
//======> console.error ---------- print in consol with  Error
{
    console.error("message")
    console.log("Iam In Console");
    console.error("error 1")
    document.write("Iam In Page");
    console.error("error 1")
}

//======> console.table ----------- print in consol the taple with index 
{
console.table(["osama", "sami", "ahmed"])
    console.table(["mohamad", "ali", "alhefel", "ahmad", "rami"]);
    // an object whose properties are strings

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    
    var me = new Person("John", "Smith");
    
    console.table(me);
}

//======> console.group---------- create list group
{
    console.group("A");
    console.log("message one");
    console.log("message two");
    console.group("1");
            console.log("message one");
            console.log("message two");
            console.group("2");
                console.log("message one");
                console.log("message two");
    console.groupEnd("A");
    console.groupEnd("1");
    console.groupEnd("2");

console.group("B");
console.log("message one");
console.log("message two");
}
//======> console.assert ----------- alert simple
{
    console.assert(2 != 2 ,'the # is not even'); //ssertion failed: the # is not even
console.assert(2 != 3 ,'the # is not even'); // not error no msg no thing
}
//======> console.clear---------- method clears the console if the environment allows it.
{
    console.clear() //void (no thing)
}
//======>  console.count------------method logs the number of times that this particular call to count() has been called.
{
    let user = ""; //variable not selected
    function greet() {
        console.count(user); // how many repeat name of user
        return "hi " + user;
    }
    user = "bob";
    greet(); // bob : 1
    greet(); // bob : 2
    greet(); // bob : 3
    user = "alice";
    greet(); // alice : 1
    greet(); // alice : 2
    console.count(); // default : 1
    console.count(); // default : 2
    console.count(); // default : 3
}
//======> console.contReset-----------Resets the value of the counter with the given label.
{
    console.contReset()
}
//======>  console.log(typeof ..?) type
{
    console.log(typeof"sami") //string
    console.log(typeof 9999) //number
    console.log(typeof [10, 15, 17]) // Array ==> object
    console.log(typeof ["os", "sa", "ah"]) // Array ==> object
    console.log(typeof {name: 'osama', age: 17, country: "SYR"}) // Array ==> object
    console.log(typeof true) //boolean
    console.log(typeof false) //boolean
    console.log(typeof undefined) //undefined
    console.log(typeof null) //object
}
//======>  variable
{
    var user = "Sami" // var=>variable, user=>key, "Sami"=>value
    //html
        <div id="hello">heeloooooo</div>
    //js
    console.log(hello);
    hello.innerHTML = "jgskjbhfdlkja"
    //--------//
    //Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function

    //Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function

    //Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
}
//======> String Syntax + Character Escape Sequences
let a = 10;
let b = 20;
let c = b / a;
let d = b / a / c

console.log(`_${c}${d}_${b}${c}${d}_${b}${c}${d}_${b}${c}${d}_${b}`); // _21_2021_2021_2021_20_
console.log(
    '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++With ++\n\\"""\\"""\n""JavaScript""``'
); 
{
    console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log('Elzero \\ Web \'School\'');
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");
}
//Concatenation
{
    let a = "We Love";
    let b = "JavaScript";
    document.write(a + " " + b);
    console.log( a, b );

    // First Example

    let a = "We Love";
    let b = "JavaScript";
    let c = "And";
    let d = "Programming";

    console.log(a = " \"\" " + b +
    "\n" + c + " " + d);

    console.log(`${a} "" '' \\ ${b}
    ${c} ${d}`);

    // Second Example
    
    let title = "Elzero";
    let desc = "Elzero Web School";
    
    let markup = `
    <div class="card">
    <div class="child">
    <h2>${title}</h2>
    <p>${desc}</p>
    </div>
    </div>
    `;
    document.write(markup);

    // therd Example
    let theCard = theTitle = "Elzero",
    theDescription = "Elzero Web School",
    theDate = "25/10"
    Card = `
    <div class="card">
        <div class="child">
        <h3>Hello ${theTitle}</h3>
        <p>${theDescription}</p>
        <span>${theDate}</span>
        </div>
    </div>
    `;
    document.write( Card.repeat( 4 ) );
    //fourd
    var numberOne = 10, 
    numberTwo = 20
    console.log( numberOne+""+ numberTwo ); // Normal Concatenate => 1020
    console.log( typeof ( numberOne + "" + numberTwo ) ); // Normal Concatenate => String
    console.log( `${ numberOne }${ numberTwo }` ); // Template Literals Way => 1020
    console.log( typeof ( `${ numberOne }${ numberTwo }` ) ); // Template Literals Way => String
    console.log( numberOne + "\n" + numberTwo );
    /*
        Normal Concatenate
        20
        10
    */
    console.log(`${numberTwo}\n${numberOne}`);
    /*
    Template Literals Way
    20
    10
    */
}