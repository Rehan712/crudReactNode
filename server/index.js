var express =require('express');
var app=express();

require('./middlewares')(app);

require('./routes')(app)




app.listen(3000,()=>{
	console.log('server is listening on port 3000')
})