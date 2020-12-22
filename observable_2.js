const { Observable } = require('rxjs');

const obs$ = new Observable(subscriber => {
    subscriber.next('RXJS')
    subscriber.next('e')
    subscriber.next('bem')
    subscriber.next('Poderoso')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Erro')
    }
})

obs$.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('Fim')
)

// obs$.subscribe({
//     next(valor) {
//         console.log(`Valor: ${valor}`)
//     },
//     error(erro) {
//         console.log(`Erro: ${erro}`)
//     },
//     complete() {
//         console.log('Fim')
//     }
// })

