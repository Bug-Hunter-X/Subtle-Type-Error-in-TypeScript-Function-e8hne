function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Invalid input types for addSafe function");
    return 0; // or throw an error
  }
}

let result = addSafe("hello", 5); // Now this will print an error message
console.log(result);

let result2 = addSafe(10, 5); // This will work as expected
console.log(result2); 