// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function retryPromise(fn, retries = 3, delay = 1000) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       return await fn(); // Try to execute the function
//     } catch (err) {
//       if (i === retries - 1) {
//         throw err; // If it's the last attempt, throw the error
//       }
//       console.log(`Attempt ${i + 1} failed, retrying in ${delay}ms...`);
//       await sleep(delay); // Wait before retrying
//     }
//   }
// }

// // Example usage:

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     // Simulate a network request with a random failure
//     const success = Math.random() > 0.5;
//     setTimeout(() => {
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Network error");
//       }
//     }, 500);
//   });
// };

// retryPromise(fetchData, 5, 2000)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Operation failed after retries:", err));

// function returnIndex(arr, target) {
//   let ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       ans = a[i] + a[j];
//       if (ans === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// let a = [1, 3, 4, 2];
// console.log(returnIndex(a, 3));

// function longestConsecutive(nums = []) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let sortNums = nums.sort((a, b) => a - b);
//   console.log("sortNums", sortNums);
//   let oldCOunt = 0;
//   let count = 0;
//   for (let i = 0; i < sortNums.length; i++) {
//     const element = sortNums[i];
//     if (element + 1 === sortNums[i + 1]) {
//       count++;
//     } else {
//       oldCOunt = count;
//       if (oldCOunt > count) {
//         count = 0;
//       }
//     }
//   }
//   return count + 1;
// }
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));

// var maxSubArray = function (nums = []) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let curSum = nums[0];
//   let maxSum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     curSum = Math.max(nums[i], curSum + nums[i]);
//     if (curSum > maxSum) {
//       maxSum = curSum;
//     }
//   }
//   return maxSum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function balanceBrackets(s = "") {
//   const stack = [];
//   const map = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (map[char]) {
//       stack.push(char);
//     } else {
//       const top = stack.pop();
//       if (map[top] !== char) {
//         return false;
//       }
//     }
//   }
// }

// console.log(balanceBrackets("()[]"));

// function findDuplicates(nums) {
//   let newArr = new Set([...nums]);
//   return newArr.size !== nums.length;
// }

// function maxProductSubArray(arr = []) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let curSum = nums[0];
//   let maxSum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     curSum = Math.max(nums[i], curSum * nums[i]);
//     if (curSum > maxSum) {
//       maxSum = curSum;
//     }
//   }
//   return maxSum;
// }

// async function retryApiCall(apiFunction, maxRetries, retryInterval) {
//   let attempts = 0;

//   while (attempts < maxRetries) {
//     console.log("attempts", attempts);

//     try {
//       // Attempt to call the API function
//       const result = await apiFunction();
//       return result; // If successful, return the result
//     } catch (error) {
//       attempts++;
//       if (attempts >= maxRetries) {
//         throw new Error("Max retry reached"); // If max retries reached, throw the error
//       }
//       // Wait for the specified retry interval before retrying
//       await new Promise((resolve) => setTimeout(resolve, retryInterval));
//     }
//   }
// }

// async function exampleApiFunction() {
//   // Simulate an API call that may fail
//   if (Math.random() < 0.7) {
//     throw new Error("API call failed");
//   }
//   return "API call succeeded";
// }

// retryApiCall(exampleApiFunction, 3, 1000)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error.message));

// var missingNumber = function (nums = []) {
//   let xor = 0;
//   const n = nums.length;

//   for (let i = 0; i < n; i++) {
//     xor ^= nums[i];
//   }

//   for (let i = 0; i <= n; i++) {
//     xor ^= i;
//   }

//   return xor;
// };

// const largeArray = Array.from({ length: 100000 }, (_, i) => i).filter(
//   (num) => num !== 36289
// );
// console.log(missingNumber(largeArray));

// console.log(missingNumber([3, 0, 1]));

// function candy(rating = []) {
//   let choc = 0;
//   for (let i = 0; i < rating.length; i++) {
//     let isOne = false;
//     choc++;
//     if (rating[i] > rating[i - 1]) {
//       isOne = true;
//       choc++;
//     }
//     if (rating[i] > rating[i + 1]) {
//       if (isOne) {
//         choc--;
//       }
//       choc++;
//     }
//   }
//   return choc;
// }

// console.log(candy([1, 0, 2]));
// console.log(candy([1, 3, 2, 2, 1]));

/**
 * @param {string} s
 * @return {number}
 */
// function lengthOfLongestSubstring(s) {
//   let charSet = new Set();
//   let left = 0;
//   let maxLength = 0;

//   for (let right = 0; right < s.length; right++) {
//     console.log("charSet", charSet);

//     while (charSet.has(s[right])) {
//       charSet.delete(s[left]);
//       left++;
//     }
//     charSet.add(s[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));

// let arr = [1, 2, 2];

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(arr[i] * 2);
//   }, 1000);
// }

// function debounce(func, wait) {
//   let timeout;

//   return function executedFunction(...args) {
//     const context = this;

//     // Clear the timeout if the function is called again before it ends
//     clearTimeout(timeout);

//     // Set a new timeout
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// // Usage example:
// const handleResize = () => {
//   console.log("Window resized");
// };

// // Apply debounce - the handleResize function will only be called after 300 milliseconds of no resize events
// window.addEventListener("resize", debounce(handleResize, 300));

// Great! To generate all possible substrings, we can use two nested loops: one to select the starting point and the other to choose the ending point of the substring.

// Here's a step-by-step guide:

// Loop through each character as the start.
// For each start, loop through the remaining characters as the end.
// Extract the substring from start to end.
// Shall we move on to checking if these substrings are palindromes?

// var lengthOfLongestSubstring = function (s) {
//   let charSet = new Set();
//   let left = 0;
//   let maxLength = 0;
//   for (let right = 0; right < s.length; right++) {
//     while (charSet.has(s[right])) {
//       charSet.delete(s[left]);
//       left++;
//     }
//     charSet.add(s[right]);
//     console.log("right - left + 1", right - left + 1);

//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// function minWindow(s, t) {
//   let minLength = Infinity;
//   let minWindow = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let substring = s.slice(i, j + 1);
//       if (containsAllCharacters(substring, t)) {
//         if (substring.length < minLength) {
//           minLength = substring.length;
//           minWindow = substring;
//         }
//       }
//     }
//   }

//   return minWindow;
// }

// function containsAllCharacters(substring, t) {
//   let tCount = {};
//   for (let char of t) {
//     tCount[char] = (tCount[char] || 0) + 1;
//   }
//   console.log("tCount", tCount);

//   let substringCount = {};
//   for (let char of substring) {
//     substringCount[char] = (substringCount[char] || 0) + 1;
//   }
//   console.log("substringCount", substringCount);
//   for (let char in tCount) {
//     if (!substringCount[char] || substringCount[char] < tCount[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(minWindow("ADOBECODEBANC", "ABC"));

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function (init) {
//   let initialVal = init;
//   return {
//     increment: () => {
//       return ++init;
//     },
//     decrement: () => {
//       return --init;
//     },
//     reset: () => {
//       init = initialVal;
//       return init;
//     },
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function (arr, fn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = fn(arr[i], i);
//     newArr.push(element);
//   }
//   return newArr;
// };
// let arr = [1, 2, 3],
//   fn = function plusone(n) {
//     return n + 1;
//   };

// console.log(map(arr, fn));

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function (arr, fn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       const element = arr[i];
//       newArr.push(element);
//     }
//   }
//   return newArr;
// };

// let arr = [1, 2, 3],
//   fn = function firstIndex(n, i) {
//     return i === 0;
//   };
// console.log(filter(arr, fn));

// let nums = [1, 2, 3, 4],
//   fn = function sum(accum, curr) {
//     return accum + curr * curr;
//   },
//   init = 100;

// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// var reduce = function (nums, fn, init) {
//   let currAcc = init;
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     currAcc = fn(currAcc, element);
//   }
//   return currAcc;
// };

// console.log(reduce(nums, fn, init));

// /**
//  * @param {Function} fn
//  * @param {Array} args
//  * @param {number} t
//  * @return {Function}
//  */
// var cancellable = function (fn, args, t) {
//   let id = setTimeout(() => {
//     fn(...args);
//   }, t);
//   return function cancelFn() {
//     clearTimeout(id);
//   };
// };

// const result = [];

// const fn = (x) => x * 5;
// const args = [2],
//   t = 20,
//   cancelTimeMs = 50;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelTimeMs);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result); // [{"time":20,"returned":10}]
// }, maxT + 15);

// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
// var argumentsLength = function (...args) {
//   return [...args].length;
// };

// let args = [{}, null, "3"];
// console.log(argumentsLength(args));

// let list = [1, 2].push(3);
// console.log(typeof list);

// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function (fn) {
//   let count = 0;
//   return function (...args) {
//     if (count === 0) {
//       count = 1;
//       return fn(...args);
//     }
//   };
// };

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);

// console.log(onceFn(1, 2, 3));
// console.log(onceFn(2, 2, 3));

// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   let left = 0,
//     right = 0;
//   let minLength = Infinity;
//   let sum = 0;
//   while (right < nums.length) {
//     right++;
//     sum = sum + nums[right];
//     while (sum >= target) {
//       minLength = Math.min(minLength, right - left);
//       sum = sum - nums[left];
//       left++;
//     }
//   }
//   return minLength;
// };

// let target = 7,
//   nums = [2, 3, 1, 2, 4, 3];
// console.log(minSubArrayLen(target, nums));

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let left = 0,
//     right = height.length - 1,
//     maxArea = 0;

//   while (left < right) {
//     let currWidth = right - left;
//     let currHeight = Math.min(height[left], height[right]);
//     let currArea = currWidth * currHeight;
//     maxArea = Math.max(maxArea, currArea);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxArea;
// };

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// console.log(maxArea(height));

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   let start = 0,
//     end = s.length - 1,
//     isValid = true;
//   s = s.toLowerCase();
//   while (start < end) {
//     if (
//       !(
//         (s[start] >= "A" && s[start] <= "Z") ||
//         (s[start] >= "a" && s[start] <= "z") ||
//         (s[start] >= "0" && s[start] <= "9")
//       )
//     ) {
//       start++;
//       continue;
//     } else if (
//       !(
//         (s[end] >= "A" && s[end] <= "Z") ||
//         (s[end] >= "a" && s[end] <= "z") ||
//         (s[end] >= "0" && s[end] <= "9")
//       )
//     ) {
//       end--;
//       continue;
//     }
//     if (s[start] !== s[end]) {
//       isValid = false;
//       break;
//     } else {
//       start++;
//       end--;
//     }
//   }
//   return isValid;
// };

// let s = "a.";
// console.log(isPalindrome(s));

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
//   let sIndex = 0,
//     tIndex = 0;

//   if (s === "") {
//     return true;
//   }

//   while (tIndex < t.length) {
//     if (s[sIndex] === t[tIndex]) {
//       sIndex++;
//     }
//     tIndex++;
//     if (sIndex === s.length) {
//       return true;
//     }
//   }

//   return false;
// };

// let s = "acb",
//   t = "ahbgdc";
// console.log(isSubsequence(s, t));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let currSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currSum = Math.max(nums[i], currSum + nums[i]);
//     if (currSum > maxSum) {
//       maxSum = currSum;
//     }
//   }
//   console.log(T);

//   return maxSum;
// };

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums));

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   if (prices.length === 0) return 0;

//   let firstBuy = -Infinity;
//   let firstSell = 0;
//   let secondBuy = -Infinity;
//   let secondSell = 0;

//   for (let price of prices) {
//     firstBuy = Math.max(firstBuy, -price);
//     firstSell = Math.max(firstSell, firstBuy + price);
//     secondBuy = Math.max(secondBuy, firstSell - price);
//     secondSell = Math.max(secondSell, secondBuy + price);
//   }

//   return secondSell;
// };
// let prices = [3, 3, 5, 0, 0, 3, 1, 4];
// console.log(maxProfit(prices));

// function bfs(graph, startNode, goalNode) {
//   let queue = [startNode];
//   let visited = new Set();
//   visited.add(startNode);
//   console.log("visited", visited);

//   while (queue.length > 0) {
//     let currentNode = queue.shift();
//     console.log("currentNode", currentNode);

//     if (currentNode === goalNode) {
//       console.log(`Path found from ${startNode} to ${goalNode}`);
//       return true;
//     }

//     let neighbors = graph[currentNode];
//     console.log("neighbors", neighbors);

//     for (let neighbor of neighbors) {
//       if (!visited.has(neighbor)) {
//         queue.push(neighbor);
//         visited.add(neighbor);
//       }
//     }
//     console.log("queue", queue);
//   }

//   console.log(`No path found from ${startNode} to ${goalNode}`);
//   return false;
// }

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "F"],
//   F: ["C", "E"],
// };
// // Test BFS
// // bfs(graph, "A", "F");
// function dfsRecursive(graph, currentNode, goalNode, visited = new Set()) {
//   visited.add(currentNode);

//   if (currentNode === goalNode) {
//     console.log(`Path found from ${currentNode} to ${goalNode}`);
//     return true;
//   }

//   let neighbors = graph[currentNode];
//   for (let neighbor of neighbors) {
//     if (!visited.has(neighbor)) {
//       if (dfsRecursive(graph, neighbor, goalNode, visited)) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// // Test DFS Recursive
// dfsRecursive(graph, "A", "F");

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function (s) {
//   return (result = s
//     .split(" ")
//     .filter((e) => e != "")
//     .reverse()
//     .join(" ")
//     .trim());
// };

// let s = "a good   example";
// console.log(reverseWords(s));

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// Function to convert an array representation of a binary tree to a TreeNode structure
// function arrayToTree(array) {
//   if (!array.length) return null;

//   let root = new TreeNode(array[0]);
//   let queue = [root];
//   let i = 1;

//   while (i < array.length) {
//     let current = queue.shift();

//     if (array[i] !== null) {
//       current.left = new TreeNode(array[i]);
//       queue.push(current.left);
//     }
//     i++;

//     if (i < array.length && array[i] !== null) {
//       current.right = new TreeNode(array[i]);
//       queue.push(current.right);
//     }
//     i++;
//   }

//   return root;
// }

// var maxDepth = function (root) {
//   if (root === null) {
//     return 0;
//   }

//   let leftDepth = maxDepth(root.left);
//   let rightDepth = maxDepth(root.right);

//   return Math.max(leftDepth, rightDepth) + 1;
// };

// let array = [3, 9, 20, null, null, 15, 7];
// let root = arrayToTree(array);

// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function (root) {
//   if (root === null) {
//     return [];
//   }

//   let result = [];
//   let queue = [root];

//   while (queue.length > 0) {
//     let levelSize = queue.length;
//     let currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       currentLevel.push(node.val);

//       if (node.left !== null) {
//         queue.push(node.left);
//       }
//       if (node.right !== null) {
//         queue.push(node.right);
//       }
//     }

//     result.push(currentLevel);
//   }

//   return result;
// };

// console.log(levelOrder(root));

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var countSubarrays = function (nums, k) {
//   let maxElement = 0;
//   for (let n of nums) {
//     maxElement = Math.max(maxElement, n);
//   }

//   let count = 0;
//   let l = 0;
//   let n = nums.length;
//   let maxFound = 0;

//   for (let r = 0; r < n; r++) {
//     if (nums[r] === maxElement) maxFound++;

//     while (maxFound === k) {
//       count += n - r;
//       if (nums[l] === maxElement) maxFound--;
//       l++;
//     }
//   }

//   return count;
// };

// let nums = [1, 3, 2, 3, 3],
//   k = 2;
// console.log(countSubarrays(nums, k));

// /**
//  * @param {number} n
//  * @param {number[][]} buildings
//  * @return {number}
//  */
// var countCoveredBuildings = function (n, buildings) {
//   let grid = Array.from({ length: n }, () => Array(n).fill(0));

//   for (let [x, y] of buildings) {
//     grid[x - 1][y - 1] = 1;
//   }
//   console.log(grid);

//   let count = 0;
//   for (let i = 1; i < n - 1; i++) {
//     for (let j = 1; j < n - 1; j++) {
//       if (
//         grid[i][j] === 1 &&
//         grid[i - 1][j] === 1 &&
//         grid[i + 1][j] === 1 &&
//         grid[i][j - 1] === 1 &&
//         grid[i][j + 1] === 1
//       ) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// let n = 5,
//   buildings = [
//     [1, 3],
//     [3, 2],
//     [3, 3],
//     [3, 5],
//     [5, 3],
//   ];
// console.log(countCoveredBuildings(n, buildings));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findNumbers = function (nums) {
//   let evenCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let digitCount = num.toString().length;
//     if (digitCount % 2 === 0) {
//       evenCount++;
//     }
//   }
//   return evenCount;
// };

// let nums = [12, 345, 2, 6, 7896];

// console.log(findNumbers(nums));

/**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function (nums) {
//   let jumps = 0;
//   let currentEnd = 0;
//   let farthest = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     farthest = Math.max(farthest, i + nums[i]);

//     if (i === currentEnd) {
//       jumps++;
//       currentEnd = farthest;

//       if (currentEnd >= nums.length - 1) {
//         break;
//       }
//     }
//   }

//   return jumps;
// };

// let nums = [2, 3, 1, 1, 4];
// console.log(jump(nums));

// function letterCombinations(digits) {
//   if (!digits) return [];
//   const map = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };
//   const result = [];
//   function backtrack(index, path) {
//     if (index === digits.length) {
//       console.log("in index", index);
//       console.log("in path", path);
//       result.push(path);
//       return;
//     }
//     console.log("path", path);
//     console.log("digits", digits);
//     console.log("index", index);
//     console.log("digits[index]", digits[index]);
//     console.log("map[digits[index]]", map[digits[index]]);
//     for (let char of map[digits[index]]) {
//       console.log("char", char);
//       backtrack(index + 1, path + char);
//     }
//     console.log("-----------------------");
//   }
//   backtrack(0, "");
//   return result;
// }

// // Example usage:
// console.log(letterCombinations("23"));

// let num = 1;
// console.log(num--); // Outputs: 2
// console.log(num);

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   let n = nums.length;
//   let result = new Array(n).fill(1);

//   let leftProduct = 1;
//   for (let i = 0; i < n; i++) {
//     result[i] = leftProduct;
//     leftProduct *= nums[i];
//   }

//   let rightProduct = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     result[i] *= rightProduct;
//     rightProduct *= nums[i];
//   }

//   return result;
// };

// let nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums));

// function numEquivDominoPairs(dominoes) {
//   const map = new Map();
//   let count = 0;
//   for (const [a, b] of dominoes) {
//     const key = a < b ? `${a},${b}` : `${b},${a}`;
//     if (map.has(key)) {
//       count += map.get(key);
//       map.set(key, map.get(key) + 1);
//     } else {
//       map.set(key, 1);
//     }
//   }
//   return count;
// }
// let dominoes = [
//   [1, 2],
//   [2, 1],
//   [3, 4],
//   [5, 6],
// ];
// console.log(numEquivDominoPairs(dominoes));

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var buildArray = function (nums) {
//   let result = new Array(nums.length);
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = nums[nums[i]];
//   }
//   return result;
// };
// let nums = [0, 2, 1, 5, 3, 4];
// console.log(buildArray(nums));

// function minimumTimeToReachLastRoom(moveTime) {
//   const n = moveTime.length;
//   const m = moveTime[0].length;
//   const directions = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];
//   const queue = [[0, 0, 0]];
//   const visited = new Set(["0,0"]);

//   while (queue.length > 0) {
//     const [row, col, time] = queue.shift();

//     if (row === n - 1 && col === m - 1) return time;

//     for (const [dr, dc] of directions) {
//       const newRow = row + dr;
//       const newCol = col + dc;
//       const newTime = time + 1;

//       if (
//         newRow >= 0 &&
//         newRow < n &&
//         newCol >= 0 &&
//         newCol < m &&
//         !visited.has(`${newRow},${newCol}`)
//       ) {
//         const waitTime = Math.max(moveTime[newRow][newCol] - time, 0);
//         const adjustedTime = time + 1 + waitTime;

//         visited.add(`${newRow},${newCol}`);
//         queue.push([newRow, newCol, adjustedTime]);
//       }
//     }
//   }
//   return -1;
// }

// let moveTime = [
//   [0, 4],
//   [4, 4],
// ];
// console.log(minimumTimeToReachLastRoom(moveTime));

// function minimumTimeToReachLastRoom(moveTime) {
//   const n = moveTime.length;
//   const m = moveTime[0].length;
//   const directions = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];

//   const pq = [[0, 0, 0]];
//   const visited = new Set();

//   while (pq.length > 0) {
//     pq.sort((a, b) => a[0] - b[0]);
//     const [time, row, col] = pq.shift();

//     if (row === n - 1 && col === m - 1) return time;

//     const key = `${row},${col}`;
//     if (visited.has(key)) continue;
//     visited.add(key);

//     for (const [dr, dc] of directions) {
//       const newRow = row + dr;
//       const newCol = col + dc;

//       if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m) {
//         const waitTime = Math.max(moveTime[newRow][newCol] - time, 0);
//         const newTime = time + 1 + waitTime;

//         pq.push([newTime, newRow, newCol]);
//       }
//     }
//   }

//   return -1;
// }

// console.log(minimumTimeToReachLastRoom(moveTime));

// let i = 0,
//   j = 10;

// while (i++ < j--) {}
// console.log(i, j);

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function (x) {
//   let ans =
//     parseInt(x.toString().split("").reverse().join("").replace(/-/g, "")) *
//     Math.sign(x);
//   return ans > Math.pow(2, 31) - 1 ? 0 : ans < Math.pow(-2, 31) ? 0 : ans;
// };

// let x = 1534236469;
// console.log(reverse(x));

// /**`
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var threeConsecutiveOdds = function (arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       count++;
//       if (count === 3) {
//         return true;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return false;
// };

// let arr = [2, 6, 4, 1];
// console.log(threeConsecutiveOdds(arr));`

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     }

//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// };

// let nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;
// console.log(search(nums, target));

// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function (num) {
//   const romanMap = [
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"],
//   ];

//   let result = "";

//   for (const [value, symbol] of romanMap) {
//     while (num >= value) {
//       result += symbol;
//       num -= value;
//     }
//   }

//   return result;
// };

// let num = 3749;
// console.log(intToRoman(num));

// const date = new Date(0); // Unix epoch (Jan 1, 1970)
// console.log(date + 1);
// console.log(date - 1);
// console.log([] + [] + "1" + 0);

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var findEvenNumbers = function (digits) {
//   const freq = new Array(10).fill(0);

//   for (const digit of digits) {
//     freq[digit]++;
//   }

//   const result = [];

//   for (let num = 100; num <= 999; num++) {
//     const hundreds = Math.floor(num / 100);
//     const tens = Math.floor((num % 100) / 10);
//     const ones = num % 10;

//     if (ones % 2 !== 0) continue;

//     freq[hundreds]--;
//     freq[tens]--;
//     freq[ones]--;

//     if (freq[hundreds] >= 0 && freq[tens] >= 0 && freq[ones] >= 0) {
//       result.push(num);
//     }

//     freq[hundreds]++;
//     freq[tens]++;
//     freq[ones]++;
//   }

//   return result;
// };

// let digits = [2, 1, 3, 0];
// console.log(findEvenNumbers(digits));

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function (grid) {
//   if (grid.length === 0) return 0;

//   const rows = grid.length;
//   const cols = grid[0].length;

//   function dfs(grid, i, j) {
//     if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === "0") {
//       return;
//     }

//     grid[i][j] = "0";

//     dfs(grid, i + 1, j);
//     dfs(grid, i - 1, j);
//     dfs(grid, i, j + 1);
//     dfs(grid, i, j - 1);
//   }

//   let numIslands = 0;

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] === "1") {
//         numIslands += 1;
//         dfs(grid, i, j);
//       }
//     }
//   }

//   return numIslands;
// };
// let grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];
// console.log(numIslands(grid));

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   let arr = [];
//   let map = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in map) {
//       arr.push(s[i]);
//     } else {
//       if (arr.length === 0 || map[arr.pop()] !== s[i]) {
//         return false;
//       }
//     }
//   }
//   return arr.length === 0;
// };

// let s = "(]";
// console.log(isValid(s));

// /**
//  * @param {string} s
//  * @param {number} t
//  * @return {number}
//  */
// var lengthAfterTransformations = function (s, t) {
//   const MOD = 1000000007;
//   let cnt = Array(26).fill(0);

//   for (let char of s) {
//     cnt[char.charCodeAt(0) - "a".charCodeAt(0)]++;
//   }

//   for (let j = 0; j < t; j++) {
//     let tmp = Array(26).fill(0);
//     for (let i = 0; i < 26; i++) {
//       if (i === 25) {
//         tmp[0] = (tmp[0] + cnt[i]) % MOD;
//         tmp[1] = (tmp[1] + cnt[i]) % MOD;
//       } else {
//         tmp[i + 1] = (tmp[i + 1] + cnt[i]) % MOD;
//       }
//     }
//     cnt = tmp;
//   }

//   return cnt.reduce((sum, val) => (sum + val) % MOD, 0);
// };

// let s = "abcyy",
//   t = 2;
// console.log(lengthAfterTransformations(s, t));

// Define a simple binary tree node
// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// // Example tree:
// //     1
// //    / \
// //   2   3
// //  / \
// // 4   5

// const root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//   new TreeNode(3)
// );

// // Preorder: Node, Left, Right
// function preorder(node, result = []) {
//   if (!node) return;
//   result.push(node.val);
//   preorder(node.left, result);
//   preorder(node.right, result);
//   return result;
// }

// // Inorder: Left, Node, Right
// function inorder(node, result = []) {
//   if (!node) return;
//   inorder(node.left, result);
//   result.push(node.val);
//   inorder(node.right, result);
//   return result;
// }

// // Postorder: Left, Right, Node
// function postorder(node, result = []) {
//   if (!node) return;
//   postorder(node.left, result);
//   postorder(node.right, result);
//   result.push(node.val);
//   return result;
// }

// console.log("Preorder:", preorder(root)); // [1, 2, 4, 5, 3]
// console.log("Inorder:", inorder(root)); // [4, 2, 5, 1, 3]
// console.log("Postorder:", postorder(root)); // [4, 5, 2, 3, 1]

class SimpleHashMap {
  constructor(size = 53) {
    this.buckets = Array(size)
      .fill(null)
      .map(() => []);
    this.size = size;
  }

  // Simple hash function for string keys
  _hash(key) {
    let hash = 0;
    const strKey = String(key);
    for (let i = 0; i < strKey.length; i++) {
      hash = (hash * 31 + strKey.charCodeAt(i)) % this.size;
    }
    console.log("hash", hash);

    return hash;
  }

  set(key, value) {
    const idx = this._hash(key);
    for (let pair of this.buckets[idx]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.buckets[idx].push([key, value]);
  }

  get(key) {
    const idx = this._hash(key);
    for (let pair of this.buckets[idx]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  has(key) {
    const idx = this._hash(key);
    for (let pair of this.buckets[idx]) {
      if (pair[0] === key) {
        return true;
      }
    }
    return false;
  }

  delete(key) {
    const idx = this._hash(key);
    for (let i = 0; i < this.buckets[idx].length; i++) {
      if (this.buckets[idx][i][0] === key) {
        this.buckets[idx].splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

// Example usage:
const map = new SimpleHashMap();
map.set("abc", 123);
map.set("acb", 456);
map.set("bca", 456);
console.log(map.get("abc")); // 123
// console.log(map.has('bar')); // true
// map.delete('foo');
// console.log(map.get('foo')); // undefined
