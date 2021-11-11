const readlineSync = require("readline-sync")

const movies = [
    {action: 12, kiss: 2, category: 'A'}, //암살
    {action: 2, kiss: 14, category: 'M'}, //어바웃타임
    {action: 7, kiss: 2, category: 'A'}, //토이스토리
    {action: 6, kiss: 15, category: 'M'}, //타이타닉
    ]

const actionCut = String(parseInt(readlineSync.question("액션씬의 숫자는?")))
const kissCut = String(parseInt(readlineSync.question("키스씬의 숫자는?")))

console.log(actionCut)

const target = {action: actionCut, kiss: kissCut} //반지의제왕

movies.sort((a ,b ) => {

    const disA = Math.sqrt(Math.pow(a.action - target.action, 2) + Math.pow(a.kiss - target.kiss, 2))
    const disB = Math.sqrt(Math.pow(b.action - target.action, 2) + Math.pow(b.kiss - target.kiss, 2))

    return disA - disB > 0 ? 1 : -1

})
console.log(movies)

const knum = 3

const result = {actionCount: 0, kissCount: 0}

for (let i = 0; i < knum; i++) {
    const movies2 = movies[i]
    if(movies2.category === 'A'){
        result.actionCount += 1
    }
    else if(movies2.category === 'M'){
        result.kissCount += 1
    }

}
if(result.actionCount === 2){
    console.log('이 영화는 액션영화인것 같습니다')
}
else if(result.kissCount === 2){
    console.log('이 영화는 멜로영화인것 같습니다')
}
console.log(result)

