/**
 * 735. asteroid-collision
 * https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  stack.push(asteroids[0]);

  for (let i = 1; i < asteroids.length; i++) {
    const value = asteroids[i];
    const lastStackItem = stack[stack.length - 1];

    // if they are not moving towards each other push it
    if (!(lastStackItem > 0 && value < 0)) {
      stack.push(value);
    } else if (value + lastStackItem === 0) {
      // of same size
      stack.pop();
    } else {
      // of different size
      // top of stack is lesser
      if (Math.abs(value) > Math.abs(lastStackItem)) {
        stack.pop();
        i--;
      } else {
        // do nothing
      }
    }
  }

  return stack;
};

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const s = [];
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];

    // Negative asteroids to the left of the stack can be ignored.
    // They'll never collide. Let's just add it to the answer stack and
    // move on. I consider this a special case.
    if ((s.length === 0 || s[s.length - 1] < 0) && a < 0) {
      s.push(a);

      // If an asteroid a is positive (l to r), it may still collide with an
      // a negative asteroid further on in the asteroids array
    } else if (a > 0) {
      s.push(a);

      // a is negative. It can only collide with positive ones in
      // the stack. The following will keep on iterating
      // until it is dealt with.
    } else {
      const pop = s.pop();

      // positive pop beats negative a, so pick up pop
      // and re-add it to the stack.
      if (Math.abs(pop) > Math.abs(a)) {
        s.push(pop);

        // a has larger size than pop, so pop will get dropped
        // and we'll retry another iteration with the same
        // negative a asteroid and whatever the stack's state is.
      } else if (Math.abs(pop) < Math.abs(a)) {
        i--;
        // magnitude of positive pop and negative a are the same
        // so we can drop both of them.
      } else {
        continue;
      }
    }
  }

  // The stack should be the answer
  return s;
};

const asteroidCollision = (asteroids) => {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const last = stack[stack.length - 1];
    const curr = asteroids[i];

    if (last > 0 && curr < 0) {
      // colliding

      if (last + curr === 0) {
        // last and curr collide and cancel each other out
        stack.pop();
      } else if (Math.abs(last) < Math.abs(curr)) {
        // last and curr collide and last is smaller
        stack.pop();
        i--;
      }
    } else {
      // not colliding
      stack.push(curr);
    }
  }

  return stack;
};
