function sov(ms) {
    console.log("Skab nyt promise")
    const prom = new Promise(dummyFunction => setTimeout(() => { dummyFunction() }, ms))
    return prom;
}

console.log("start")

async function doSomethingAsync() {
    console.log("1111 før sov");
    let prm = await sov(3000);
    console.log("2222 efter sov");
    console.log(prm);
}

doSomethingAsync();
console.log("slut")
