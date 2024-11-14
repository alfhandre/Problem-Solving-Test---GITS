// rumus A000124
// a(n) = ((n(n+1))/2) - n+1
// a(n) = ((n^2+n)/2) - n+1
// a(n) = (n^2+n+2)/2

const generateSequence = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const value = (i * i + i + 2) / 2;
    result.push(value);
  }
  return result.join("-");
};

console.log(generateSequence(7));
console.log(generateSequence(10));
console.log(generateSequence(13));
