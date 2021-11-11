
//정해진 숫자만큼 출력하는 함수 만들기
//readlinesync로 해볼까?

const num = 16

function outputNum(num){

    let sum = 0
    const arr = []

    for (let i = 0; i < num; i++) {
        sum += 1
        arr.push(sum)
    }
    return arr
}
console.log(outputNum(num))
