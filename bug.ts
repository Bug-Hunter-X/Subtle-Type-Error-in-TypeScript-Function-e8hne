function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // Type Error, but may not be immediately obvious
console.log(result);