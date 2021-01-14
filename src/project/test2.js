function sleep(second) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, second * 1000)
    })
}


async function syncLoop() {
    // 1~5$B$^$G$N%i%s%@%`$J@0?t$NG[Ns$r@8@.(B
    const ran_arr = Array(5).fill(0).map(() => Math.floor(Math.random() * 5 + 1))

    // for$BJ8$r;H$C$F%k!<%W=hM}$9$k(B
    for (let i = 0; i < ran_arr.length; i++) {
        await sleep(ran_arr[i]) // n$BICBT$D(B
        console.log(i+1 + "$BHVL\$N=hM}$,40N;!*!*(B" + "$BBT$A;~4V$O(B" + ran_arr[i] + "$BIC!*!*(B")
    }
    console.log("$B=*N;!*!*(B")
}

// $B<B9T(B
// await$B$O%H%C%W%l%Y%k$G;H$&$3$H$,$G$-$J$$(B(ES2017$B;~E@(B)$B$N$G(B
// async$B$r$D$1$?B(;~4X?t$r:n$C$F8F$S=P$7$F$$$k(B
(async ()=>{
    console.log("$BF14|E*$K8F$S=P$9(B")
    await syncLoop()
}).call()
