# Subtle Type Error in TypeScript

This repository demonstrates a subtle type error that can occur in TypeScript. The `add` function is defined to accept two numbers, but it's called with a string and a number, resulting in a type error that might not be immediately obvious. The solution involves adding type guards or using union types for improved type safety.

## Bug

The bug lies in the `bug.ts` file. The `add` function is designed to work with numbers, but it receives a string as the first argument, causing a type error.

## Solution

The solution, found in `bugSolution.ts`, adds input validation to improve type safety. This makes it more robust and less prone to these types of runtime errors.