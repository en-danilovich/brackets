module.exports = function check(str, bracketsConfig) {
  bracketsConfig = [].concat(...bracketsConfig);

  let stack = [];
  for (let char of str) {
    let bracketIndex = bracketsConfig.indexOf(char);
    if (bracketIndex === -1) {
      continue;
    }

    if (bracketsConfig[bracketIndex] === bracketsConfig[bracketIndex + 1] && stack.slice(-1)[0] === bracketIndex) {
      bracketIndex++;
    }
    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex);
    } else if (stack.pop() + 1 !== bracketIndex) {
      return false;
    }
  }

  return stack.length === 0;
}
