class Strings  {
    
 stringLength(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count++;
    }
    if (count > 1 && count <= 10) {
        return 'The string length is below or equal to ten'
    } else {
        return 'error';
    }
};

 reverseString(string) {
    return string.split("").reverse().join("");
};

capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

};

const instance = new Strings();

module.exports = instance;
