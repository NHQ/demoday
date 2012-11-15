var http = require('http');

var host = 'localhost'
// var host = '' REPLICA NETMORPHIC APP RUNNING ON CYLUS'S LAPTOP

var headers = {
	host: 'localhost',
	host: host,
	port: 3201,
	path: '/get/json',
	method: 'get'
};

setInterval(request, 300)

setInterval(setConfigType, 5000)

function request(){

	var req = http.request(headers, response);
	
	req.on('error', console.error);
	
	req.end();
	
	function response(res){
				
		res.on('data', function(data){
			var info = JSON.parse(data.toString());
			var a = data.toString().split('","');
			var str = a.join('"\n"')
			console.log(str + '\n')
		})
		
	}

};

var typeswitch = false;

function setConfigType(){
	
	var c = "/{x}?/{y}"
	
	typeswitch = !typeswitch
	
	var type = typeswitch ? 'apples' : 'bananas'
	
	var headers = {
		host: 'localhost',
		host: host,
		port: 3201,
		path: '/setConfig?srcUrl=' + c + '&type=' + type,
		method: 'get'
	};
	
	var req = http.request(headers, response);
	
	req.on('error', console.error);
	
	req.end();
	
	function response(res){
				
		res.on('data', function(data){
			var info = JSON.parse(data.toString());
			var a = data.toString().split('","');
			var str = a.join('"\n"')
			console.log(str + '\n')
		})
		
	}
	
}
