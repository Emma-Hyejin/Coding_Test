//#2621
//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
//input millis = 100 output 100
async function sleep (millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    })
};


// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100
