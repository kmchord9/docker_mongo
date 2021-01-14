function sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    })
}

(async () => {
  for (let i=0; i<5; i++) {
     const result = await sampleResolve(5);
     console.log(result);
  }

})();


