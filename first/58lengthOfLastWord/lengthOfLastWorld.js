/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const groups = s.split(' ');
  const subs = groups.filter(str => str !== '');
  return subs[subs.length - 1].length;
};
