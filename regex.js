// REGEX(Regular EXPRESSSION)
// -------------------------
// eg:
// let regex = /cat/;
// console.log(RegExp.test("i have cat"));
// ---------------------------------------------
// Creating regular expression
// ----------------------------

// const regexLiteral = /hello/;

// const regexConstructor = new RegExp("hello","i");

// console.log(regexLiteral.test("hello"));
// console.log(regexConstructor.test("HELLO"));
// --------------------------------------------------------

// FLAG
// ---------

// 1. Flag-i:Case insensitive
// -------

// let regex = /hello/i;

// console.log(regex.test("Hello"));
// console.log(regex.test("HELLO"));
// console.log(regex.test("hello"));
// --------------------------------------------------------------

// 2.Flag-g:Global
// -------

// let text = "cat dog cat dog";

// let result = text.match(/dog/g);

// console.log(result);
// ---------------------------------------------------------

// 3.Flag-m:Multiline
// -------

// let text = `cat
// dog
// cat`;

// let regex = /^dog/gm;

// console.log(text.match(regex)); 
// -------------------------------------------------------------

// 4.Flag-s:DotAll
// ------

// let text = `Hello
// World`;

// let regex = /Hello.World/s;

// console.log(regex.test(text));
// ---------------------------------------------------------------

// 5.Flag-u:unicode
// -------

// let text = "Hello";

// let regex = /\p{Emoji}/u;

// console.log(regex.test(text));
// -----------------------------------------------------------

// 6.Flag-y:sticky flag
// -------

// let text = "hello hello";

// let regex = /hello/y;

// regex.lastIndex = 6;

// console.log(regex.test(text));
// ---------------------------------------------------------------

// Literal character:exact same character
// -------------------

// let regex = /dog/;

// console.log(regex.test("cat"));
// console.log(regex.test("dog"));
// console.log(regex.test("I have a cat"));
// -----------------------------------------------------

// Metacharacters
// ----------------
//1. Metacharacter-.:Any single character

// let regex = /c.t/;

// console.log(regex.test("cat"));
// console.log(regex.test("cut"));
// console.log(regex.test("cot"));
// -----------------------------------------------------------------

// 2.Metacharacter-^:Start of string

// let regex = /^cat/;

// console.log(regex.test("cat is an animal"));
// console.log(regex.test("I like cat"));
// ---------------------------------------------------------------------

//3.Metacharacter-$:End of string

// let regex = /cat$/;

// console.log(regex.test("I like cat"));
// console.log(regex.test("cat is an animal"));
// -----------------------------------------------------------------------

// 4.Metacharacter-*:0 or more occurance

// let regex = /ab*/;

// console.log(regex.test("a"));
// console.log(regex.test("ab"));
// console.log(regex.test("abb"));
// console.log(regex.test("abbb"));
// ------------------------------------------------------------------------

//5.Metacharacter-+:1 or more occurance

// let regex = /ab+/;

// console.log(regex.test("ab"));
// console.log(regex.test("ab"));
// console.log(regex.test("abb"));
// console.log(regex.test("abbb"));
// -------------------------------------------------------------------

//6. Metacharacter-?:0 or 1 occurance

// let regex = /colou?r/;

// console.log(regex.test("color"));
// console.log(regex.test("colour"));
// -----------------------------------------------------
// 7.Metacharacter-\:Escape special character

// let regex = /\./;

// console.log(regex.test("Hello."));
// console.log(regex.test("Hello"));
// --------------------------------------------------------------------

// Character classes
// ------------------

// 1.Character classes-[abc]:matches"a","b",or"c"

// let regex = /[abc]/;

// console.log(regex.test("apple"));
// console.log(regex.test("banana"));
// console.log(regex.test("cat"));
// console.log(regex.test("dog"));
// ---------------------------------------------------------------------

// 2.character class-[0-9]:matches any digit

// let regex = /[0-9]/;

// console.log(regex.test("Hello5"));
// console.log(regex.test("Hello"));
// -------------------------------------------------------------------------

// 3.Character class-[a-z]:matches any lowercase letter

// let regex = /[a-z]/;

// console.log(regex.test("hello"));
// console.log(regex.test("HELLO"));
// ---------------------------------------------------

// 4.Character class-[^abc]:matches any character except "a","b",or "c"

// let regex = /[^abc]/;

// console.log(regex.test("apple"));
// console.log(regex.test("banana"));
// console.log(regex.test("cat"));
// console.log(regex.test("dog"));
// -------------------------------------------------------------------------

// Shorthand
// ----------

//1.Shorthand-\d:digit[0-9]

// let regex = /\d/;

// console.log(regex.test("Hello 5"));
// console.log(regex.test("Hello"));

//2. shorthand-\D:Non-digit

// let regex = /\D/;

// console.log(regex.test("123"));
// console.log(regex.test("123A"));

// 3.Shorthand-\w:word

// let regex = /\w/;

// console.log(regex.test("Hello"));
// console.log(regex.test("123"));
// console.log(regex.test("@"));

// 4.shorthand-\W:not word

// let regex = /\W/;

// console.log(regex.test("Hello"));
// console.log(regex.test("Hello!"));
// console.log(regex.test("Hello World"));

// 5.Shorthand-\s:white+space

// let regex = /\s/;

// console.log(regex.test("Hello World"));
// console.log(regex.test("HelloWorld"));

// 6.Shorthand-\S:non whitespace

// let regex = /\S/;

// console.log(regex.test("   "));
// console.log(regex.test("Hello"));
// -------------------------------------------------------------------------------

// Quantifiers
// ---------------

// 1.Quantifier-*:0 or more

// let regex = /ab*/;

// console.log(regex.test("a"));
// console.log(regex.test("ab"));
// console.log(regex.test("abb"));
// console.log(regex.test("abbb"));

// 2.Quantifier-+:1 or more

// let regex = /ab+/;

// console.log(regex.test("a"));
// console.log(regex.test("ab"));
// console.log(regex.test("abb"));
// console.log(regex.test("abbb"));

// 3.Quantifier-?:zero or one

// let regex = /colou?r/;

// console.log(regex.test("color"));
// console.log(regex.test("colour"));
// console.log(regex.test("colouur"));

//4.Quantifier-{n}:exactly n time

// let regex = /\d{3}/;

// console.log(regex.test("123"));
// console.log(regex.test("12"));
// console.log(regex.test("1234"));
// -----------------------------------------------------------------------------

// 5.Quantifier-{n,}:n or more times

// let regex = /\d{3,}/;

// console.log(regex.test("12"));
// console.log(regex.test("123"));
// console.log(regex.test("12345"));
// ------------------------------------------------------------------------------

// Quantifier-{n,m}:between n and m times
// -----------------

// let regex = /^\d{2,4}$/;

// console.log(regex.test("12"));
// console.log(regex.test("123"));
// console.log(regex.test("1234"));
// console.log(regex.test("12345"));
// ------------------------------------------------------------------------

// Greedy matching
// ----------------

// let text = "aaa";

// let result = text.match(/a+/);

// console.log(result[0]);
// ---------------------------------------------------

// Lazy matching
// ---------------

// let text = "aaa";

// let result = text.match(/a+?/);

// console.log(result[0]);
// ------------------------------------------------------------------------

// Grouping
// ---------

// let regex = /(hello)+/;

// console.log(regex.test("hello"));
// console.log(regex.test("hellohello"));
// ----------------------------------------------------------------

// Capturing
// ----------

// const regex = /(\w+)\s(\w+)/;

// const result = "John Doe".match(regex);

// console.log(result);
// -------------------------------------------------------

// Backreference
// --------------

// let regex = /(.)\1/;

// console.log(regex.test("aa"));
// console.log(regex.test("ab"));
// ---------------------------------------------------------

// Javascript Regex Methods
// ------------------------

// String method
// ---------------

// 1.match()

// let text = "cat dog cat";

// let result = text.match(/cat/g);

// console.log(result);

// 2.replace()

// let text = "cat dog";

// let result = text.replace(/cat/, "rat");

// console.log(result);

// 3.search()

// let text = "cat dog";

// let result = text.search(/dog/);

// console.log(result);

// 4.split()

// let text = "apple,banana,orange";

// let result = text.split(/,/);

// console.log(result);

// -------------------------------------------

// RegExp methods
// ---------------

// 1.test()

// let regex = /cat/;

// console.log(regex.test("I have a cat"));
// console.log(regex.test("I have a dog"));

// 2.exec()

// let regex = /cat/;

// let result = regex.exec("I have a cat");

// console.log(result[0]);
// ---------------------------------------------------