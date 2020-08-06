node-red-contrib-strapi
========================

A <a href="http://nodered.org" target="_new">Node-RED</a> 
node to get response to  <a href="https://strapi.io/" target="_new"> strapi api </a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-strapi


Usage
-----

## Strapi API 
<i><a href="http://www.strapi.com" target="_new">Strapi</a></i> api request node.

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