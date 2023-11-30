require('./server.js');
const { webhookSpam } = require('./webhookSpam.js');
const { config } = require('./config.js');

config.forEach((item) => {
	webhookSpam(item)
})
