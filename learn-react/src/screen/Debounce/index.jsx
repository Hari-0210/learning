import React, { useCallback, useState } from "react";

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function Debounce() {
  const [count, setCount] = useState(0);

  // Define the increment function
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Create a throttled version of the increment function
  const incrementThrottled = useCallback(throttle(increment, 1000), []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementThrottled}>Increment</button>
    </div>
  );
}

export default Debounce;
