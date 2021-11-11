

const readlineSync = require("readline-sync")
const inputHour = readlineSync.question("Hour?")
const inputMin = readlineSync.question("Min?")

function calcTotal(hourValue, minValue) {

    function hourD(hour) {
        const hourDegree = (360 / 12) * (hour % 12)

        return hourDegree
    }

    function minD(min) {
        const minDegree = (360 / 60) * min

        return minDegree
    }

    function extraHour(min) {
        return ((360 / 12) / 60) * min
    }

    const result = Math.abs((hourD(hourValue) + extraHour(minValue)) - minD(minValue))

    return result
}
console.log(calcTotal(inputHour,inputMin))