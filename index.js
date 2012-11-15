var proxy = require('../netmorphic').http
  , monitor = require('../netmorphic').monitor
  , config = require('./config.json')
  , sample_handlers = require('./sample.handlers.js')
  , Cluster = require('cluster2')
;

//var clustered = false;
var clustered = true;

var handlers = {
	apples: sample_handlers.apples,
	bananas: sample_handlers.bananas
}

var proxy = proxy(config, handlers, clustered);  

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
