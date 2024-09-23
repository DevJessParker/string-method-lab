function getCharAt(stringInput,indexNumber) {
    if (stringInput) {
        if (typeof(stringInput) == 'string') {
            return stringInput.charAt(indexNumber);
        } else {
            return 'Value given to function was of Data Type: number';
        }
    } else {
        return 'String is empty';
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
        if ((typeof(phrase) == 'number') || (typeof(word) == 'number')) {
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
        if ((typeof(phrase) == 'number') || (typeof(word) == 'number')) {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.indexOf(word);
        }
    } else {
        return 'String is empty';
    }
}


function sliceString(phrase,position1,position2) {
    if (phrase) {
        if (typeof(phrase) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.slice(position1,position2);
        }
    } else {
        return 'String is empty';
    }
}


function splitString(phrase,separator) {
    if (phrase) {
        if (typeof(phrase) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.split(separator);
        }
    } else {
        return 'String is empty';
    }
}


function convertToLowerCase(phrase) {
    if (phrase) {
        if (typeof(phrase) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.toLowerCase();
        }
    } else {
        return 'String is empty';
    }
}


function convertToUpperCase(phrase) {
    if (phrase) {
        if (typeof(phrase) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.toUpperCase();
        }
    } else {
        return 'String is empty';
    }
}


function trimString(text) {
    if (typeof(text) == 'number') {
        return 'Value given to function was of Data Type: number';
    } else {
        return text.trim();
    }
}


function replaceSubstring(phrase,searchTerm,replacementTerm) {
    if (phrase && searchTerm && replacementTerm) {
        if ((typeof(searchTerm) || typeof(replacementTerm)) == 'number') {
            return 'Value given to function was of Data Type: number';
        } else {
            return phrase.replace(searchTerm,replacementTerm);
        }
    } else {
        return 'String is empty';
    }
}




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