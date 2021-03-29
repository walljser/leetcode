function lengthOfLongestSubstring(s: string): number {
  const size: number = s.length;
  let begin: number = 0;
  let length: number = 0;
  let currentLength: number = 0;
  const map = {};
  for (let i = 0; i < size; i++) {
    const char = s[i];
    if (map[char] !== undefined) {
      const mapIndex = map[char];
      if (mapIndex >= begin) {
        currentLength = i - mapIndex;
        begin = mapIndex + 1;
        if (begin + length > size) {
          break;
        }
      } else {
        currentLength++;
        if (length < currentLength) {
          length = currentLength;
        }
      }
    } else {
      currentLength++;
      if (length < currentLength) {
        length = currentLength;
      }
    }
    map[char] = i;
  }
  return length;
};

const s: string = "abcabcbb";
const s2: string = "bbbb";
const s3: string = "pwwkew";
const n: number = lengthOfLongestSubstring(s);
const n2: number = lengthOfLongestSubstring(s2);
const n3: number = lengthOfLongestSubstring(s3);
console.log(n);
console.log(n2);
console.log(n3);
