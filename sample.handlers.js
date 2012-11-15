var httpProxy = require('http-proxy')
  ,  urlUtil = require('url');

exports['apples'] = function (req, res) {
    var config = req.serConfig;
	var proxy = req.proxy;
    var buffer = httpProxy.buffer(req);
    setTimeout(function () {
        req.url = getUrl(req.url, config.url);
        proxy.proxyRequest(req, res, {
            host:config.host || '127.0.0.1',
            port:config.port || 3200,
            buffer:buffer
        });
    }, config.latency || 1000);
};

exports['bananas'] = function(req, res){
	var config = req.serConfig;
    var ip = req.connection.remoteAddress;
	res.writeHead(200);
	var obj = {};
	obj.ip = ip;
	obj.pid = process.pid;
	obj.configuration = config.type;
	res.end(JSON.stringify(obj));
}

function getLatency(lo, hi) {
    if (lo > hi) {
        var temp = lo;
        lo = hi;
        hi = temp;
    }
    return ((hi - lo) * Math.random()) + lo;
}

function getUrl(url, configUrl) {
    if (configUrl) {
        var parsed = urlUtil.parse(url);
        return configUrl + (parsed.search || '') + (parsed.hash || '');
    }
    return url;
}