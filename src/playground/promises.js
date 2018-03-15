const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is resolved');
        reject('error here');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).then(() => {
    console.log('middle step');
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');