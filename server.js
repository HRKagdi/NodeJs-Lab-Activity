var http = require('http');
var functions = require('./service.js');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'application/json'});
    //res.write("The topper is:"+ functions.GetHighestMarks());
    //res.end();
    //res.write(functions.GetSubjectiToppers(1));
    //res.end();
    var url=req.url;
    if(url==='/query=1'){
        res.end(JSON.stringify("The topper is: "+ functions.GetHighestMarks()));
    }
    else if(url==='/query=2&index=0'){
        res.end(JSON.stringify(functions.GetSubjectiToppers(0)));
    }
    else if(url==='/query=2&index=1'){
        res.end(JSON.stringify(functions.GetSubjectiToppers(1)));
    }
    else if(url==='/query=2&index=2'){
        res.end(JSON.stringify(functions.GetSubjectiToppers(2)));
    }
    else if(url==='/query=2&index=3'){
        res.end(JSON.stringify(functions.GetSubjectiToppers(3)));
    }
    else if(url==='/query=2&index=4'){
        res.end(JSON.stringify(functions.GetSubjectiToppers(4)));
    }
    else {
        res.end(JSON.stringify("Invalid Querry"));
    }

}).listen(8080);