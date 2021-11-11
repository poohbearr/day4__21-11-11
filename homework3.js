//배열을 주면 max값을 찾아내는 함수 만들기

const arr = [100,30,95,70,54,80,150,700,300,900]

function findMax(num){

    let max = 0
    let num2
    for (let i = 0; i < arr.length; i++) {
        num2 = num[i]

        if(max < num2){
            max = num2
        }

    }
    return max
}
console.log(`최대값은 ${findMax(arr)} 입니다`)