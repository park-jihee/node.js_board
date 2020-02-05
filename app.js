var express = require('express');
// 설치된 module은 require 명령어를 통해 불러 올 수 있고, express module을 express라는 이름의 변수로 저장
var app = express();
//express module은 함수이다. 
var path = require('path');

app.set("view engine", 'ejs');
//express에게 ejs를 view engine으로 사용할 것을 알린다.

app.use(express.static(path.join(__dirname + 'public')));
//__dirname - 실행중인 node 파일의 경로를 표시한다

var data = {count:0}; 
//선언된 변수는 서버에 저장된다

app.get('/', function (req, res) {
    data.count++;
    res.render('myejs', data)
});

app.get('/reset', function (req, res) {
    data.count = 0;
    res.render('myejs', data);
});

app.get('/set/count', function(req, res) {
    if(req.query.count) data.count=req.query.count;
    res.render('myejs', data);
});

app.get('/set/:num', function (req, res) {
    data.count = req.params.num;
    res.render('myejs', data);
});
//':num'처럼 route에 콜론이 오면 이는 placeholder가 된다
//주소줄의 변수선언..? 

// 서버의 root에 get 요청이 왔을 때 'Hello World'라는 신호를 클라이언트에 보내라는 명령어이다.

app.listen(3000, function(){
    console.log('Server On!');
});