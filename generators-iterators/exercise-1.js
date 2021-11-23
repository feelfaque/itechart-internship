let message = "message";

let messageIterator = message[Symbol.iterator]();
messageIterator.next();
for ( let item of messageIterator ) {
    console.log( item );
}
/*
messageIterator.next();

for-of:
e
s
s
a
g
e
 */