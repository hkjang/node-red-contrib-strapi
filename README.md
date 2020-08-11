node-red-contrib-strapi
========================

A <a href="http://nodered.org" target="_new">Node-RED</a> 
node to get response to  <a href="https://strapi.io/documentation/v3.x/content-api/api-endpoints.html#endpoints" target="_new"> strapi api </a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-strapi


Usage
-----

## Strapi API 
<i><a href="https://strapi.io/documentation/v3.x/content-api/api-endpoints.html#endpoints" target="_new">Strapi</a></i> api request node.

Expects a <b>msg.payload</b> with request(get,post,put,delete) params.

### API URL
- The url to call the Strapi API.

### JWT Token
- JWT Token value you put in the http header when calling the Strapi API.
- If the strapi api is public, the jwt token value is not necessary.

### method
- Http Request Method 

## parameter example
```javascript
# GET
msg.method = 'get'
// msg.payload.id = '4';

# POST
msg.method = 'post'
msg.payload.price = '300';
msg.payload.tax = '30';

# PUT
msg.method = 'put'
msg.payload.id = '2';
msg.payload.price = '400';
msg.payload.tax = '40';

# DELETE
msg.method = 'delete'
msg.payload.id = '2';
```

## sample flow
```json

[{"id":"3e1b116b.cedffe","type":"http request","z":"3f322a34.631386","name":"","method":"POST","ret":"obj","paytoqs":"ignore","url":"https://yourdomain.com/auth/local","tls":"","persist":false,"proxy":"","authType":"","x":450,"y":360,"wires":[["5b7cb68a.595e98"]]},{"id":"f5982664.8ffe08","type":"inject","z":"3f322a34.631386","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":120,"y":360,"wires":[["7b10baf0.334ff4"]]},{"id":"5b7cb68a.595e98","type":"debug","z":"3f322a34.631386","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":630,"y":360,"wires":[]},{"id":"7b10baf0.334ff4","type":"function","z":"3f322a34.631386","name":"","func":"msg = {}\nmsg.payload = {};\nmsg.payload.identifier = 'test';\nmsg.payload.password = 'test1234!';\n\n\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":360,"wires":[["3e1b116b.cedffe"]]},{"id":"a7d351e3.67da4","type":"inject","z":"3f322a34.631386","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":120,"y":400,"wires":[["9fdc864d.3c9578"]]},{"id":"89adfa3d.3a4578","type":"debug","z":"3f322a34.631386","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":730,"y":400,"wires":[]},{"id":"9fdc864d.3c9578","type":"function","z":"3f322a34.631386","name":"","func":"msg = {};\nmsg.payload = {};\nmsg.method = 'get';\nmsg.payload.id = '1';\n\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":400,"wires":[["8b66bc62.ae2e5"]]},{"id":"70077ccd.7c0fc4","type":"json","z":"3f322a34.631386","name":"","property":"payload","action":"","pretty":false,"x":560,"y":400,"wires":[["89adfa3d.3a4578"]]},{"id":"8b66bc62.ae2e5","type":"strapi","z":"3f322a34.631386","strapiAPIURL":"https://yourdomain.com/products","jwtToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk3MTQ0MzQwLCJleHAiOjE1OTk3MzYzNDB9.ULLdLkpXQ0ElmOp-QzFk_gHZfoDd6Ee0l7DVdhxaAII","x":430,"y":400,"wires":[["70077ccd.7c0fc4"]]}]

```
