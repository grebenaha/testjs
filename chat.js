/**
 * Created by neiro on 02/04/2017.
 */
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/chat.ejs');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
    