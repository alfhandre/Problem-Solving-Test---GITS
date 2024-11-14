const isBalanced = (s) => {
  const brackets = [];
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      brackets.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (brackets.length === 0 || brackets.pop() !== matchingBrackets[char]) {
        return "NO";
      }
    }
  }

  return brackets.length === 0 ? "YES" : "NO";
};

console.log(`input 1 { [ ( ) ] } : ${isBalanced("{ [ ( ) ] }")}`);
console.log(`input 2 { [ ( ] ) } : ${isBalanced("{ [ ( ] ) }")}`);
console.log(
  `input 3 { ( ( [ ] ) [ ] ) [ ] } : ${isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")}`
);
