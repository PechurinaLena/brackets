module.exports = function check(str, bracketsConfig) {
  // your solution

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') stack.push(str[i]); //если видим открывающую скобку - помещаем ее в стек
    else if (str[i] == ')') { //далее если видим закрывающую скобку, проверяем
      if (stack.pop() != '(') { //если наверху стека нет открывающей для нее - фалс
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

  return (!stack.length); //если на выходе стэк пустой, то последовательность правильная
};