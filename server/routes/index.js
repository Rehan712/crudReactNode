module.exports= app => {
	app.get('/students',require('../handlers/getStudentsHandler.js'))
}