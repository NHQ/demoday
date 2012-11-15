http = require('http');

module.exports['test set config on cluster'] = function(test){
	test.expect(2);
    var x = 0;
	var config = "/{x}?/{y}"

	setInterval(function(){
		
		http.get('http://localhost:3201/setConfig?srcUrl=' + config + '&type=apples&latency=' + (x+=10)).on('response', function(res){
			test.equal(res.statusCode, 200);
		});	
	}, 500);

	setInterval(function(){
		
		http.get('http://localhost:3201/getConfig?srcUrl=' + config).on('response', function(res){
			res.on('data', function(data){
				var a = data.toString().split('","');
				var str = a.join('"\n"');
				console.log(str + '\n')
			})
	//		test.equal(res.statusCode, 404);
	//		test.done();
		});	
	}, 20)	
};