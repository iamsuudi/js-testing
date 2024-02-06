
function analyzeArray(arr) {
    if (arr.length === 0) return { average: 0, min: 0, max: 0, length: 0 };
    return {
        average: arr.reduce((s, i) => s + i, 0) / arr.length,
        length: arr.length,
        min: arr.sort((a, b) => a - b)[0],
        max: arr.sort((a, b) => a - b).pop(),
    };
}

module.exports = analyzeArray;