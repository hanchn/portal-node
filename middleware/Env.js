app.get("/config.js", function(req, res){
    var config = require("./config.js.js")
    res.send("var config = " + JSON.stringify(config));
});

export default 
