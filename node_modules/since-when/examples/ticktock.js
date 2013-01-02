var Time = require('../');
var time = new Time();
var buf = new Buffer(128 * 2)
buf.write('zuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzuggzugg')
time.every(2902495, tock);
// every billion nanosecond tock()

function tock(tick, interval){
  console.log(buf.toString('utf8'))
  console.log(interval + ' time in nanoseconds passed')
  tick()
};