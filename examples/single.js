const {fnvxor32} = require('..')

const nodes3 = ['First-node', 'Second-node', 'Third-node']
console.log()
console.log( fnvxor32('/data/abc345', nodes3) )
console.log( fnvxor32('/data/qrst', nodes3) )
console.log( fnvxor32('/data/xyz123', nodes3) )

const nodes5 = nodes3.concat(['Fourth-node', 'Fifth-node'])
console.log()
console.log( fnvxor32('/data/abc345', nodes5) )
console.log( fnvxor32('/data/qrst', nodes5) )
console.log( fnvxor32('/data/xyz123', nodes5) )


console.log()

