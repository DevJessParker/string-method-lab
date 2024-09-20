function getCharAt(str) {
    if (str) {
        if (typeof(str) == 'string') {
            let testString = str;
            return testString.charAt(1);
        } else {
            return 'Value given to function was of Data Type: number';
        }
    } else {
        return 'String is empty'
    }
}


function concatenateStrings(text1,text2) {
    if ((typeof(text1) || typeof(text2)) == 'number') {
        return 'Value given to function was of Data Type: number';
    } else {
        return text1.concat(text2);
    }
}


function doesInclude(phrase,word) {
    if (phrase && word) {
        if ((typeof(word) || typeof(phrase)) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.includes(word);
        }
    } else {
        return 'String is empty';
    }
}


function getIndexOf(phrase,word) {
    if (phrase && word) {
        if ((typeof(phrase) || typeof(word)) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.indexOf(word);
        }
    } else {
        return 'String is empty';
    }
}


function sliceString() {}


function splitString() {}


function convertToLowerCase() {}


function convertToUpperCase() {}


function trimString() {}


function replaceSubstring() {}




module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring
};