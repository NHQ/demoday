**Timing functions that use process.hrtime**

    npm install since-when

usage

    var Time = require('../');
    var time = new Time();
 
    time.every(1e9, tick)
    // every billion nanosecond tick
    
    function tick(tock, interval){
      console.log(interval + ' time in nanoseconds passed')
      tock()
    }
    
__METHODS__

**T.sinceBegin()** - time since new T()

**T.sinceLast()** - time since last tick, starts at new T()

**T.every(nanoseconds, function)** - call function(nextTick, interval) every nanoseconds. function must call nextTick()
 
see /examples