function lengthOfLongestSubstring(s) {
    var size = s.length;
    var begin = 0;
    var length = 0;
    var currentLength = 0;
    var hashMap = new Map();
    for (var i = 0; i < size; i++) {
        var char = s[i];
        if (hashMap.has(char)) {
            var mapIndex = hashMap.get(char);
            if (mapIndex >= begin) {
                currentLength = i - mapIndex;
                begin = mapIndex + 1;
                if (begin + length > size) {
                    break;
                }
            }
            else {
                currentLength++;
                if (length < currentLength) {
                    length = currentLength;
                }
            }
        }
        else {
            currentLength++;
            if (length < currentLength) {
                length = currentLength;
            }
        }
        hashMap.set(char, i);
    }
    return length;
}
;
var s = "abcabcbb";
var s2 = "bbbb";
var s3 = "pwwkew";
var n = lengthOfLongestSubstring(s);
var n2 = lengthOfLongestSubstring(s2);
var n3 = lengthOfLongestSubstring(s3);
console.log(n);
console.log(n2);
console.log(n3);
