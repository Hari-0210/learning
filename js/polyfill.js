// 1. Array.prototype.map
Array.prototype.myMap = function (callback, thisArg) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
  }
  return result;
};

// 2. Array.prototype.filter
Array.prototype.myFilter = function (callback, thisArg) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

// 3. Array.prototype.reduce
Array.prototype.myReduce = function (callback, initialValue) {
  const arr = this;
  let accumulator = initialValue;
  let startIdx = 0;
  if (accumulator === undefined) {
    accumulator = arr[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
};

// 4. Array.prototype.forEach
Array.prototype.myForEach = function (callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      callback.call(thisArg, arr[i], i, arr);
    }
  }
};

// 5. Array.prototype.find
Array.prototype.myFind = function (callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

// 6. Array.prototype.every
Array.prototype.myEvery = function (callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && !callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

// 7. Array.prototype.some
Array.prototype.mySome = function (callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

// 8. Function.prototype.bind
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, args.concat(newArgs));
  };
};

// 9. Function.prototype.call
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

// 10. Function.prototype.apply
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = Array.isArray(args)
    ? context[fnSymbol](...args)
    : context[fnSymbol]();
  delete context[fnSymbol];
  return result;
};

// 11. Promise.all
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then((val) => {
        results[i] = val;
        completed++;
        if (completed === promises.length) resolve(results);
      }, reject);
    });
    if (promises.length === 0) resolve([]);
  });
};

// 12. Promise.race
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(resolve, reject);
    });
  });
};

// 13. Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 14. Throttle
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// ---------------------------------------------------------------

// 1. Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 2. Memoize
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 3. EventEmitter (Pub/Sub)
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }
}

// 4. Custom Promise
class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilled = [];
    this.onRejected = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilled.forEach((fn) => fn(value));
      }
    };
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejected.forEach((fn) => fn(reason));
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const fulfilled = (value) => {
        try {
          if (typeof onFulfilled === "function") {
            resolve(onFulfilled(value));
          } else {
            resolve(value);
          }
        } catch (err) {
          reject(err);
        }
      };
      const rejected = (reason) => {
        try {
          if (typeof onRejected === "function") {
            resolve(onRejected(reason));
          } else {
            reject(reason);
          }
        } catch (err) {
          reject(err);
        }
      };
      if (this.state === "fulfilled") {
        setTimeout(() => fulfilled(this.value), 0);
      } else if (this.state === "rejected") {
        setTimeout(() => rejected(this.reason), 0);
      } else {
        this.onFulfilled.push(fulfilled);
        this.onRejected.push(rejected);
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 5. Deep Clone (with circular reference handling)
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);
  let clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}

// 6. Implement bind, call, apply
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, args.concat(newArgs));
  };
};

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = Array.isArray(args)
    ? context[fnSymbol](...args)
    : context[fnSymbol]();
  delete context[fnSymbol];
  return result;
};

// 7. Task Scheduler (with concurrency control)
class TaskScheduler {
  constructor(concurrency = 2) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }
  add(task) {
    return new Promise((resolve, reject) => {
      const run = async () => {
        this.running++;
        try {
          const result = await task();
          resolve(result);
        } catch (err) {
          reject(err);
        }
        this.running--;
        if (this.queue.length > 0) {
          const next = this.queue.shift();
          next();
        }
      };
      if (this.running < this.concurrency) {
        run();
      } else {
        this.queue.push(run);
      }
    });
  }
}

// 8. Simulate setInterval using setTimeout
function customSetInterval(fn, delay) {
  let timerId;
  function tick() {
    fn();
    timerId = setTimeout(tick, delay);
  }
  timerId = setTimeout(tick, delay);
  return {
    clear: () => clearTimeout(timerId),
  };
}

// 9. Simple HashMap Polyfill
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
// const map = new SimpleHashMap();
// map.set('foo', 123);
// map.set('bar', 456);
// console.log(map.get('foo')); // 123
// console.log(map.has('bar')); // true
// map.delete('foo');
// console.log(map.get('foo')); // undefined
