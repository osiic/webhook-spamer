const { Webhook } = require('discord-webhook-node');

function webhookSpam({ webhookToken, webhookUsername = "ISOL", webhookMessage = "ISOL", delay = 2500 }) {
	if (!webhookToken) return console.log("Gak ada Token nya bang")
	let nilai = 1;

	setInterval(() => {
		const hook = new Webhook(webhookToken);
		let proces = `[${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB]`;
		let count = `[${nilai}]`;

		hook.setUsername(webhookUsername);
		hook.send(`\`${count}\` ${webhookMessage}`)
			.then(() => {
				console.log(`${count} ${proces} Webhook Ok [${webhookUsername}]`);
			})
			.catch(err => {
				console.log(err.message);
			});

		nilai++
	}, delay);
}

module.exports = { webhookSpam }
