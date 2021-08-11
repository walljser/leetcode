// 30. 串联所有单词的子串
// 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

// 示例 1：

// 输入：s = "barfoothefoobarman", words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// 输出：[]
// 示例 3：

// 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// 输出：[6,9,12]

// 解题思路，滑动窗口，辅助工具：两个Map

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const res = [];
  let wordNum = words.length;
  if (wordNum === 0) {
    return res;
  }
  const wordLen = words[0].length;
  const allWords = new Map();
  for (let w of words) {
    allWords.set(w, (allWords.get(w) || 0) + 1);
  }
  for (let i = 0; i < s.length - wordNum * wordLen + 1; i++) {
    const hasWords = new Map();
    let num = 0;
    while (num < wordNum) {
      const word = s.substring(i + num * wordLen, i + (num + 1) * wordLen);
      if (allWords.has(word)) {
        hasWords.set(word, (hasWords.get(word) || 0) + 1);
        if (hasWords.get(word) > allWords.get(word)) {
          break;
        }
      } else {
        break;
      }
      num++;
    }
    if (num === wordNum) {
      res.push(i);
    }
  }
  return res;
};
