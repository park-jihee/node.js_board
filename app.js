var express = require('express');
// 설치된 module은 require 명령어를 통해 불러 올 수 있고, express module을 express라는 이름의 변수로 저장

var app = express();
//express module은 함수이다. 

app.get('/', function (req, res) {
    res.send('Hello World');
});
//서버의 root에 get 요청이 왔을 때 'Hello World'라는 신호를 클라이언트에 보내라는 명령어이다.


app.listen(3000, function(){
    console.log('Server On!');
});