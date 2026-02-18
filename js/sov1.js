function sov(ms) {
    console.log("skab nyt promise");
    const prom = new Promise(dummyFunction => setTimeout(dummyFunction, ms));
    return prom;
}
console.log("start");
sov(5000).then( () => {
        console.log("har sovet");
        console.log("vi er klar til at fortsætte");
     }
).catch(err => console.log(err));
console.log("slut");

