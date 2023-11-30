const fetch = require("node-fetch");
const express = require("express");

const app = express();
const website = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webhook Spammer</title>
	<link rel="icon" type="image/x-icon" href="https://cdn.discordapp.com/attachments/885110057736474634/1119498084003610744/favicon.ico">
  <style>
    body {
      background-color: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .card {
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      padding: 20px;
      text-align: center;
      transition: background 0.3s ease;
    }

	.card:hover {
 background-color: #222;
	}

    a {
      text-decoration: none;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <a href="https://webhook-spammer.osi-ic.repl.co" target="_blank">
      <h1>Webhook Spammer</h1>
      <p>Click to access the webhook spammer tool</p>
    </a>
  </div>
</body>
</html>
`


setInterval(async () => {
  const response = await fetch(`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`).catch(err => {
    console.log(`Failed to ping error: ${err.message}`);
  });
}, 1000);

app.listen(3000, () => {
	console.log('[0] Server On')
});

app.get("/", (request, response) => {
  response.send(website);
});
