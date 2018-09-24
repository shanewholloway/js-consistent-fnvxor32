# consistent-fnvxor32

Consistent hashing using [FNV32-a1][FNV32] and [Xorshift 32][XOR32]

Keys distribution across nodes should approach a uniform statstical distribution.

The majority of key mappings should remain stable and unchanged when nodes are
added or removed.  When you add or remove `k` of `n` nodes, the mapping for any
given key should remain the same with probability `1 - k/n`.

The resulting mapping should be deterministic.


### Single target example

```javascript
import fnvxor32 from 'consistent-fnvxor32'

const nodes3 = ['First-node', 'Second-node', 'Third-node']
fnvxor32('/data/abc345', nodes3) // => Third-node
fnvxor32('/data/qrst', nodes3)   // => Second-node
fnvxor32('/data/xyz123', nodes3) // => Third-node

const nodes5 = nodes5.concat(['Fourth-node', 'Fifth-node'])
fnvxor32('/data/abc345', nodes5) // => Fifth-node
fnvxor32('/data/qrst', nodes5)   // => Fourth-node
fnvxor32('/data/xyz123', nodes5) // => Third-node

```

### Triple target example

```javascript
import {create_fnvxor32, select_top_n} from 'consistent-fnvxor32'

const ch3 = create_fnvxor32({selector: select_top_n(3)})

const nodes5 = ['First-node', 'Second-node', 'Third-node', 'Fourth-node', 'Fifth-node']

ch3('/data/abc345', nodes5) // => [ 'Fifth-node', 'Third-node', 'Second-node' ]
ch3('/data/qrst', nodes5)   // => [ 'Fourth-node', 'Second-node', 'Third-node' ]
ch3('/data/xyz123', nodes5) // => [ 'Third-node', 'Second-node', 'First-node' ]

const nodes7 = nodes5.concat(['Sixth-node', 'Seventh-node'])
ch3('/data/abc345', nodes7) // => [ 'Fifth-node', 'Sixth-node', 'Third-node' ]
ch3('/data/qrst', nodes7)   // => [ 'Fourth-node', 'Second-node', 'Sixth-node' ]
ch3('/data/xyz123', nodes7) // => [ 'Third-node', 'Second-node', 'First-node' ]

```


### References

- [Fowler–Noll–Vo][FNV32] hash `fnv32-a1`

- [XOR Shift 32][XOR32] from Marsaglia, George (July 2003). "Xorshift RNGs". Journal of Statistical Software. 8 (14). doi:10.18637/jss.v008.i14.

[FNV32]: https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-1a_hash
[XOR32]: https://en.wikipedia.org/wiki/Xorshift
