// var axios = require('axios');
// var qs = require('qs');
var request = require('request');

module.exports = function(RED) {
    "use strict";

    // set this to true to spam your console with stuff.
    var strapiDebug = true;

    function strapiOut(n) {
        RED.nodes.createNode(this,n);
        var self = this;

        this.strapiAPIURL = n.strapiAPIURL;
        this.jwtToken = n.jwtToken || "";
        var node = this;

        this.on('input', function (msg) {
            var strapiAPIURL = node.strapiAPIURL || msg.strapiAPIURL;
            var jwtToken = node.jwtToken || msg.jwtToken;
            var method = node.method || msg.method;
            var id = msg.payload.id;
            var data = msg.payload;

            if (this.credentials && this.credentials.jwtToken) {
                jwtToken = this.credentials.jwtToken;
            }

            if (strapiDebug) { node.log(JSON.stringify(data)); }
            try {
                var options = {};
                options.method = method;
                if(id){
                    options.uri = strapiAPIURL + '/' + id;
                }else{
                    options.uri = strapiAPIURL;
                }
                node.log(options.uri);

                if(method === 'get'){
                    options.query = JSON.stringify(data);
                    options.headers = {
                        'Authorization': 'Bearer '+jwtToken
                    };
                }else if(method === 'post' || method === 'put' || method === 'delete'){
                    options.body = JSON.stringify(data);
                    options.headers = {
                        'Authorization': 'Bearer '+jwtToken,
                        'Content-Type': 'application/json',
                        'Content-Length': data.length
                    };
                    node.log(options.body);
                }

                request(options, function (err, res, body) {
                    if(err){
                        console.trace();
                        node.log(err,msg);
                    }else{
                        msg.payload = body;
                        msg.res = res;
                        self.send(msg);
                    }
                });
            }
            catch (err) {
                console.trace();
                node.log(err,msg);
            }
        });
    }
    RED.nodes.registerType("strapi", strapiOut);
};
