module.exports= app => {
	app.get('/students',(req,res)=>{
		res.json('./data.js')
	})
}