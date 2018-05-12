const {create_fnvxor32, select_top_n} = require('..')

const ch3 = create_fnvxor32({selector: select_top_n(3)})

const nodes5 = ['First-node', 'Second-node', 'Third-node', 'Fourth-node', 'Fifth-node']
console.log()
console.log( ch3('/data/abc345', nodes5) )
console.log( ch3('/data/qrst', nodes5) )
console.log( ch3('/data/xyz123', nodes5) )


const nodes7 = nodes5.concat(['Sixth-node', 'Seventh-node'])
console.log()
console.log( ch3('/data/abc345', nodes7) ) 
console.log( ch3('/data/qrst', nodes7) )   
console.log( ch3('/data/xyz123', nodes7) ) 

console.log()
