var proxy = require('../netmorphic-1').http
  , monitor = require('../netmorphic-1').monitor
  , config = require('./config.json')
  , sample_handlers = require('./sample.handlers.js')
  , Cluster = require('cluster2')
;

//var clustered = false;
var clustered = true;

var handlers = {
	'fake data': sample_handlers['fake data'],
	'meta data': sample_handlers['meta data'],
	'internet': sample_handlers.internet,
	'slow internet': sample_handlers['slow internet']
}

var proxy = proxy(config, sample_handlers, clustered);  

if(clustered){
	var cluster = new Cluster({
		    port: 3201,
			monitor: monitor()
		});
		
	cluster.listen(function(cb) {
			    cb(proxy.server);
			});

}
 else{
	proxy.server.listen(3201)	
}
