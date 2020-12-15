const {interval, from} = require('rxjs')

const getNumbers = interval(500)

const sub1 = getNumbers.subscribe(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => {
    sub1.unsubscribe()
}, 8000)

from([1,2,3]).subscribe(console.log)