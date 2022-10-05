const dotenv = require('dotenv');

const { app } = require('./app');

// Utils
const { initModels } = require('./models/initModels');
const { db } = require('./utils/database.util');

dotenv.config({ path: './config.env' });

const startServer = async () => {
	try {
		db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

// Establish model's relations
initModels();	

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));
	
	const PORT = process.env.PORT || 4002;
app.listen(PORT,  () => {
	console.log(`Express app running!! on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
