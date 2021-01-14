function sleep(second) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, second * 1000)
    })
}


async function syncLoop() {
    // 1~5までのランダムな整数の配列を生成
    const ran_arr = Array(5).fill(0).map(() => Math.floor(Math.random() * 5 + 1))

    // for文を使ってループ処理する
    for (let i = 0; i < ran_arr.length; i++) {
        await sleep(ran_arr[i]) // n秒待つ
        console.log(i+1 + "番目の処理が完了！！" + "待ち時間は" + ran_arr[i] + "秒！！")
    }
    console.log("終了！！")
}

// 実行
// awaitはトップレベルで使うことができない(ES2017時点)ので
// asyncをつけた即時関数を作って呼び出している
(async ()=>{
    console.log("同期的に呼び出す")
    await syncLoop()
}).call()
