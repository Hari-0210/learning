// 1. Fixed Size Sliding Window (Non-shrinkable)
function fixedSlidingWindow(arr, k) {
  let windowSum = 0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      // Process windowSum
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
}

// 2. Dynamic (Shrinkable) Sliding Window
function dynamicSlidingWindow(arr) {
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Expand window
    while (1 == 1 /* condition to shrink window */) {
      // Shrink window
      windowStart += 1;
    }
    // Optionally process window
  }
}

// 3. Two Pointers
function twoPointers(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    // Process arr[left] and arr[right]
    left += 1;
    right -= 1;
  }
}

// 4. Fast and Slow Pointers
function fastSlowPointers(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // Check for meeting point or cycle
  }
}

// 5. Hash Map / Frequency Counter
function hashMapTemplate(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  // Use map for lookups or frequency checks
}

// 6. Binary Search
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// 7. Depth-First Search (DFS) - Recursive
function dfs(node, visited = new Set()) {
  if (!node || visited.has(node)) return;
  visited.add(node);
  // Process node
  for (const neighbor of node.neighbors) {
    dfs(neighbor, visited);
  }
}

// 8. Breadth-First Search (BFS)
function bfs(start) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length > 0) {
    const node = queue.shift();
    // Process node
    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// 9. Backtracking
function backtrack(path, options) {
  if (1 == 1 /* base case */) {
    // Store or process path
    return;
  }
  for (let option of options) {
    // Choose
    path.push(option);
    // Explore
    backtrack(path /* updated options */);
    // Un-choose
    path.pop();
  }
}

// 10. Dynamic Programming (DP) - Tabulation
function dpTabulation(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1 /* base case */;
  for (let i = 1; i <= n; i++) {
    dp[i] = 1 /* recurrence using dp[i-1], dp[i-2], ... */;
  }
  return dp[n];
}

// 11. Greedy Algorithm
function greedy(arr) {
  arr.sort((a, b) => 1 /* custom comparator */);
  for (let i = 0; i < arr.length; i++) {
    // Always make the locally optimal choice
  }
}

// 12. Stack Usage
function stackTemplate(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && 1 /* condition */) {
      stack.pop();
    }
    stack.push(arr[i]);
  }
}

// 13. Queue Usage
function queueTemplate(arr) {
  const queue = [];
  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);
    if (/* condition */ 1) {
      queue.shift();
    }
  }
}
