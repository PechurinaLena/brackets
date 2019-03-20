module.exports = function check(str, bracketsConfig) {
  // your solution

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') stack.push(str[i]);
    else if (str[i] == ')') {
      if (stack.pop() != '(') {
        return false;
      }
    } else if (str[i] == '}') {
      if (stack.pop() != '{') {
        return false;
      }
    } else if (str[i] == ']') {
      if (stack.pop() != '[') {
        return false;
      }
    }
  }

  return true;
};