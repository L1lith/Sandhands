const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const colors = require('colors/safe')
const { details } = require('../dist/Sandhands-commonjs.js')

// add tests
suite.add('Complicated String', function () {
  details('ababababbaabcbabad', { _: String, allowed: 'abc' })
})
suite.add('Complicated Object', function () {
  details({ a: ['hi'] }, { a: [String] })
})
// add listeners
suite.on('error', function (evt) {
  console.log('Suite Error', evt.target.error)
})
suite
  .on('cycle', function (event) {
    console.log(colors.cyan(String(event.target)))
    console.log('Executions Per Second:', event.target.hz) // The number of executions per second.
    console.log('RME:', event.target.stats.rme)
    console.log('Sample Length:', event.target.stats.sample.length)
    console.log('Test Count:', event.target.count) // The number of times a test was executed.
    console.log('Cycles:', event.target.cycles) // The number of cycles performed while benchmarking.
    console.log('') // Add some space for readability
  })
  .on('complete', function () {
    // for (var i = 0; i < this.length; i++) {
    //     console.log(this[i].hz + " ops/sec");
    //     console.log(this[i].stats.sample.length);
    // }
    console.log(colors.green('Fastest is ' + this.filter('fastest').map('name')))
    console.log(colors.red('Slowest is ' + this.filter('slowest').map('name')))
  })
  // .on('cycle', function(event) {
  //   const {target, result} = event
  //   //console.log(target.name, Object.keys(event))
  // })
  // .on('complete', function() {
  //   const fastest = this.filter('fastest')
  //   this.sort('')
  //   //console.log('Fastest is ' + fastest.map('name') + ' with a time of ' + fastest[0]);
  // })
  // run async
  .run({ async: true })
