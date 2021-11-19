/*
*Exercise 3. Promises vs Callbacks*

function isGreater (a, b, cb) {
    var greater = false
    if(a > b) {
        greater = true
    }
    cb(greater)
}

isGreater(1, 2, function (result) {
    if(result) {
        console.log('greater');
    } else {
        console.log('smaller')
    }
})*/

function isGreater (a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve('greater')
        } else {
            reject('smaller')
        }
    })
}

isGreater(1, 2).then((result) => {
    console.log(result);
})