const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Promise!');
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Padrao');
    subscriber.next('Observer');
    subscriber.next('!');

})

obs.subscribe(console.log)