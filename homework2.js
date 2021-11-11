// 로또 번호생성 함수만들기


function lotto(lottoLength){

    const arr = []

    while(1) {

        let num = parseInt((Math.random() * 45) + 1)
        const index = arr.indexOf(num)

        console.log(`NUM: ${num} INDEX: ${index}`)

        if(index > -1){
            continue
        }
        arr.push(num)

        if(arr.length === lottoLength){
            break
        }

    }
    return arr
}
console.log(lotto(6))

