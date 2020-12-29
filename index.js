var exp = require('express') ;
var ap = exp() ;

ap.use(exp.static(__dirname + '/frontend')) ;

ap.get('/', function(req, res)
{
    res.sendFile(__dirname + '/frontend/index.html');
}) ;

var port = process.env.PORT || 3000 ;
ap.listen(port, function()
{
    console.log("Site Running on http://localhost:" + 3000) ;
}) ;