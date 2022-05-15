/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */
var longestCommonPrefix = function (strs) {
    let result = '';
    let searchwith = '';
    let matchResult = '';
    let count = 0;
    let innerCount = 0;

    for (let j = 1; j <= strs[0].length; j++) {
        searchwith = strs[0].substring(0, j); // strs[0].charAt(j)
        result = strs.map((value) => {
            innerCount++;
            if (value.startsWith(searchwith)) {
                count++;
            }
            // console.log("innerCount = " + innerCount);
            // console.log("count = " + count);
            if (count == strs.length) {
                matchResult = searchwith;
            }

            if (innerCount % strs.length == 0) {
                count = 0;
            }

            return value.startsWith(searchwith);
        })
    }

    return matchResult;
};
