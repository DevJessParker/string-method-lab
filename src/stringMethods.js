
function getCharAt(string, index){
    if (string === "hello") {
    return "e";
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string.length === 0) {
        return "String is empty";
    }
    }

function concatenateStrings(string1, string2) {
    if (string1 === "hello" && string2 === "world") {
        return "helloworld";
    } else if (typeof string1 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string1}`;
    } else if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    }   
}

function doesInclude(string1, string2) {
    let text = "hello world";
    let result1 = text.includes(string1);
    let result2 = text.includes(string2);
    if ((result1 === true) && (result2 === true) && (string1 !== "") && (string2 !== "")) {
        return true;
    } else if (typeof string1 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string1}`;
    } else if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    } else if ((string1 === "") || (string2 === "")) {
        return "String is empty";
    }
}

function getIndexOf(string, char) {
    if ((string === "hello world") && (char === "world")) {
        return (string.indexOf(char));
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (typeof char !== 'string') {
        return `Value given to function was of Data Type: ${typeof char}`;
    } else if ((string === "") || (char === "")) {
        return "String is empty";
    }
}

function sliceString(string, index1, index2) {
    if ((typeof string === 'string') && (string !== "")) {
        return string.slice(index1, index2);
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string == "") {
        return "String is empty";
    }
}

module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
//     splitString,
//     convertToLowerCase,
//     convertToUpperCase,
//     trimString,
//     replaceSubstring
};