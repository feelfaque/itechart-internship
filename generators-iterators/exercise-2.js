let getCountdownIterator = function* () {
    yield 9;
    yield 8;
    yield 7;
    yield 6;
    yield 5;
    yield 4;
    yield 3;
    yield 2;
    yield 1;
};

console.log( [ ...getCountdownIterator() ] );
// [9, 8, 7, 6, 5, 4, 3, 2, 1]