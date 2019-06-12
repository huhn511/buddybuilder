<template>
  <div class="home">
    <h1>Buddy Builder</h1>
    <button class="btn btn-primary" v-on:click="sendToTangle">Send to tangle</button>
    <p>{{message}}</p>
  </div>
</template>

<script>

import { composeAPI } from '@iota/core'
const Converter = require('@iota/converter')

const iota = composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})



// Must be truly random & 81-trytes long.
const seed = 'OTLC9YQ99ZSZ9KAZSOUXSCXIOAHVIAMCAYAWGZFTVKWWQAPUSDZRLJKFLRARYAWPTXHBIWAZJURHBWHZF'


export default {
  name: 'Home',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendToTangle() {
      
// Array of transfers which defines transfer recipients and value transferred in IOTAs.
const transfers = [{
    address: 'IT9NWXVOKDNPOOBFSSA9RWKCQJRZYLPQFRDCAYERRDNUARMP9MJSGC9MTMERLOYZOJCYSQTIAMLVSVTKY',
    value: 0, // 1Ki
    tag: 'BUDDYBUILDER', // optional tag of `0-27` trytes
    message: Converter.asciiToTrytes(this.message) // optional message in trytes
}]

// Depth or how far to go for tip selection entry point.
const depth = 3 

// Difficulty of Proof-of-Work required to attach transaction to tangle.
// Minimum value on mainnet is `14`, `7` on spamnet and `9` on devnet and other testnets.
const minWeightMagnitude = 9

// Prepare a bundle and signs it.
iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        // Persist trytes locally before sending to network.
        // This allows for reattachments and prevents key reuse if trytes can't
        // be recovered by querying the network after broadcasting.

        // Does tip selection, attaches to tangle by doing PoW and broadcasts.
        return iota.sendTrytes(trytes, depth, minWeightMagnitude)
    })
    .then(bundle => {
        console.log(`Published transaction with tail hash: ${bundle[0].hash}`)
        console.log(`Bundle: ${bundle}`)
    })
    .catch(err => {
        // handle errors here
        console.log("err", err)
    })


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
