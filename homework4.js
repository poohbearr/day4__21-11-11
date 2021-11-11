//배열을 주면 min값을 찾아내는 함수 만들기

const arr = [500,230,590,723,345,888,15,16,1]

function findMin(num){
    let min = 1000

    for (let i = 0; i < num.length; i++) {

        if(min > num[i]){
            min = num[i]
        }
    }
    return min
}
console.log(`최소값은 ${findMin(arr)} 입니다.`)