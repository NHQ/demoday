module.exports = T

function T(){
  var self = this;
  self.start = process.hrtime()
  self.last = process.hrtime();
  self.x = []
  self.end = []

  return self
};

T.prototype.sinceBegin = function(){
  return process.hrtime(this.start)
};

T.prototype.sinceLast = function(){
  this.x = process.hrtime(this.last)
  this.last = add(this.x, this.last)
  return this.x
}

T.prototype.every = function(ns, fn){
  this.beat = process.hrtime()
  var int = ns || 0
    , fn = fn || function(t,c){c()}
    , self = this;
      
  function tick(){
    process.nextTick(tock)
  }

  function tock(){
    var ns = nanos(process.hrtime(self.beat))

    if (ns > int){
      self.beat = process.hrtime();
      fn(tick, ns)
    }
    else tick()
  }
  
  tick()
}

function nanos(arr){
  return arr[0] * 1e9 + arr[1]
}

function add(a, b){
  var ns = a[1] + b[1];
  b[0] += a[0];
  b[1] = ns % 1e9;
  if(ns !== b[1]) b[0]++;
  return b
};