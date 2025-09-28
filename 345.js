/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let a = s.split('');
    let f = a.filter(a => 'aeiou'.includes(a.toLowerCase())).reverse().join('');
    let count = 0;
    return a.map(a => 'aeiou'.includes(a.toLowerCase()) ? a = f[count++] : a).join('');
};