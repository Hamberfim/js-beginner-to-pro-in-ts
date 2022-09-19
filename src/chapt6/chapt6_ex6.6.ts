function factorial(value: number): number {
  if (value === 0) {
    console.log(value);
    return 1;
  } else {
    console.log(value);
    return value * factorial(--value);
  }
}
console.log(factorial(7));
