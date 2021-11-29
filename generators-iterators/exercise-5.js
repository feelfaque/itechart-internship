function* fibonacciSequence () {
   let a = 0;
   let b = 1;
   while (true) {
       yield a;
       [a, b] = [b, a + b]
   }
}

const sequence = fibonacciSequence();

for (let i = 0; i<10; i++) {
    console.log(sequence.next());
}