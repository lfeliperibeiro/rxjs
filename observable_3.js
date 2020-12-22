const { Observable, noop } = require('rxjs')

function between (min, max) {
    return new Observable(subscriber => {
        Array(max - min).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

between(4,10)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log(`fim`),
    )