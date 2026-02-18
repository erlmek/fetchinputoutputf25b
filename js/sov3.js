function sov(ms) {
    return new Promise(resolve =>
    setTimeout(() => resolve(`Slet for ${ms}ms`), ms))
}

async function doSomethingAsync() {
    console.log("1111 før sov");
    let prm = await sov(3000);
    console.log("2222 efter sov");
    console.log(prm);
}

doSomethingAsync();
