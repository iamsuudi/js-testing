
function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase().concat(str.slice(1));
}

module.exports = capitalize;