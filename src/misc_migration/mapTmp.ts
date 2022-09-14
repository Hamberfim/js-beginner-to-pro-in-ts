let numbers: number[] = [512, 256, 128, 64, 32, 16, 8, 4];
let squares: number[] = numbers.map((item: number) => item * item);

for (let i = 0; i < squares.length; i++) {
  console.log(squares[i]);
}
