
function reverseString(str) {
    if (str === undefined) return '';
    const arr = String(str);
    return arr.split('').reverse().join("");
}

module.exports = reverseString;