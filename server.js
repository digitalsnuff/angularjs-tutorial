var connect = require("connect");
var serveStatic = require("serve-static");

connect().use(serveStatic("./src")).listen(5000);