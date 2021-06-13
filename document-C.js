
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
//======> confirm ---------------continue  or stop
{
    confirm("vhjxjv")
}
// example
{
    alert( "my name is sami" );
    myname = prompt( "Enter your name", "my name is ..." );
    alert(myname)
    mix = confirm( "are you sure ?" );
    alert( mix ); // if i chose yes will be alert true , or false
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
    console.log(typeof {name: 'osama', age: 27, country: "SYR"}) // Array ==> object
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
{
    let a = 10;
    b = 20,
    c = b / a,
    d = b / a / c;

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
    
    let title = "Elzero",
        desc = "Elzero Web School";

    let print = `
        <div class="card">
            <div class="child">
                <h2>${title}</h2>
                <p>${desc}</p>
            </div>
        </div>
    `;
    document.write( print );
    console.log( print );

    // therd Example
    let theCard = theTitle = "Elzero",
                theDescription = "Elzero Web School",
                theDate = "25/10";

    Card = `
        <div class = "card">
            <div class ="child">
                <h3>Hello ${ theTitle }</h3>
                <p>${ theDescription }</p>
                <span>${ theDate }</span>
            </div>
        </div>
    `;
    document.write( Card.repeat( 4 ));
    
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
//arithmetic operators
{
    console.log( 10 + 20 ); //30
    console.log( 10 + "osama" ); //osama

    console.log( 10 - 20); // -10
    console.log( 10 - "osama" ); // nan
    console.log( typeof ( NaN ) ) // number
    
    console.log( 10 * 20 ); // 200
    console.log( 10 * -20 ); // -200

    console.log( 20 /5 );  // 4
    console.log( 20 / 3 ); // 6.666666666666667

    console.log( 2 ** 4 ); //16
    console.log( 2 * 2 * 2 * 2 ); // 16

    console.log( 10 % 2 ); // 0
    console.log( 11 % 2 ); // 1

    num = 1
    1
    ++num
    2
    console.log( +100 );  // 100
    console.log( +"100" );  // 100
    console.log( +"-100" );  // -100
    console.log( +"osama" );  // nan
    console.log( +"15.5" );  // 15.5
    console.log( +0xff );  // 255
    console.log( +null );  // 0
    console.log( +false );  // 0
    console.log( +true );  // 1

    console.log( -100 );  // -100
    console.log( -"100" );  // -100
    console.log( -"-100" );  // 100
    console.log( -"osama" );  // nan
    console.log( -"15.5" );  // -15.5
    console.log( -0xff );  // -255
    console.log( -null );  // -0
    console.log( -false );  // -0
    console.log( -true );  // -1

    console.log( Number( "100" ) );

    console.log(200 + 15 % 3 + 190 + 10 - 400); // 0
}
// type coerction (type casting) تحويل بالاكراه
{
    let a = "10";
    let b = 20;
    let c = true;
    console.log( a + b ); // 1020
    console.log( +a + b ); // 30

    console.log( a - b ); // -10
    console.log( b - a ); // 10

    console.log( "" + 2 ); // 2
    console.log( "" - 2 ); // -2

    console.log( false + true ); // 1
    console.log( false - true ); // -1

    console.log( b + c ); //21
    console.log( a + b + c ); //1020true
    console.log( +a + b + c ); // 31
}
// ASsignment Operators
{
    let a = 10;
    a = a + 20;
    console.log( a ); //30
    // a = 30;

    a += 100; // a = a + 100
    console.log( a ); //130
    ////////////////////////
    let a = 10;
    a -= 100; // a = a - 100
    console.log( a ); //-90
}
//assignment 
{
    let a = 10;
    let b = "20";
    let c = 80;

    console.log( ++a + +b++ + +c++ - +a++ ); //100
    console.log( 11 + 20 + 80 - 11 ); //100

    console.log( ++a + -b + +c++ - -a++ + +a ); //94
    console.log( 11 + -20 + 80 + 11 + +12 ); //94

    console.log(--c + +b + --a * +b++ - +b * a + --a - +true) //97
    console.log( 79 + 20 + 9 * 20 - 21 * 9 + 8 - 1 ) //97

    let d = "-100";
    let e = "20";
    let f = 30;
    let g = true;

    console.log( -d * +e + f % 3 * g ); //2000
    console.log( -d * +e + f % ++g ); //2000
    console.log( -( --d ) + +f + ++e * ++g ); //173
    console.log(-(--d) * ++g - --f);  //173
}