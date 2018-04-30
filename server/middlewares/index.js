module.exports=app=>{
	app.use(require('morgan')('dev'))
	app.use(require('express').static(__dirname+'/../../dist'));
}