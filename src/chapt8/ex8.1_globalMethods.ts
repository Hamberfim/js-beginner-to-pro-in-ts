/**
 *  Built-in / Global Methods
 */
let x: number = 12;
console.log(Number.isNaN(x)); // returns boolean - is not a number?
console.log(!Number.isNaN(x)); // returns boolean - is not a number?
console.log(isNaN(x));
console.log(!isNaN(x));

// chaining built-in methods
let str1: string = "Hello";
let str2: string = "there";
console.log(str1.concat(str2).toUpperCase().replace("THERE", " you. ").concat("Glad to see ya!"));

//Decoding/Encoding URI's(uniform resource identifier) and URL's(uniform resource locator)
// encodeURI(uri) skips over / , ? : @ & = + $ #
let uri: string = "https://www.example.com/submit?name=maaike van putten";
let encode_uri = encodeURI(uri); // replaces the space with %20
console.log("Encoded: " + encode_uri);
let decode_uri = decodeURI(encode_uri);
console.log("Decoded: " + decode_uri); // removes the %20 and leaves the spaces
encode_uri = encodeURIComponent(uri);
console.log("Encoded Component: " + encode_uri);
decode_uri = decodeURIComponent(encode_uri);
console.log("Decoded Component: " + decode_uri);

//ex 8.1
let code: string = "How's it going?";
let en_coded = encodeURIComponent(code);
console.log("Encoded Component: " + en_coded);
let de_coded = decodeURIComponent(en_coded);
console.log("Decoded Component: " + de_coded);
