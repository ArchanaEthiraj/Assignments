let a = 0, b = 1, c, z = 10;
console.log('Fibonacci Series:');
for (let i = 1; i <= z; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}