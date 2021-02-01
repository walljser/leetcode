/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
package lengthOfLongestSubstring;

import java.util.HashMap;
import java.util.Map;

public class LengthOfLongestSubstring {
  public int lengthOfLongestSubstring(String s) {
    if (s.length() == 1) {
      return 1;
    }
    int length = 0;
    int begin = 0;
    int currentLength = 0;
    int n = s.length();
    Map<Character, Integer> map = new HashMap<>();
    for (int i = 0; i < n; i++) {
      char point = s.charAt(i);
      if (map.containsKey(point)) { // 找到重复
        int mapIndex = map.get(point); // 找到上一个该字符的位置
        if (mapIndex >= begin){
          currentLength = i - mapIndex; // 计算长度
          begin = mapIndex + 1; // 将重复出现的位置标记为开始
          if (begin + length > n) { // length已是最长，无需继续查找
            break;
          }
        } else {
          // 计算长度
          currentLength++;
          if (length < currentLength) {
            length = currentLength;
          }
        }
      } else {
        // 计算长度
        currentLength++;
        if (length < currentLength) {
          length = currentLength;
        }
      }
      map.put(point, i);
    }
    return length;
  }
}
