const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

const TELEGRAM_API = `https://api.telegram.org/bot<7223283073:AAHZTFqbWM3HaGb0b6bXobOkQgEfQu3xK-k>`; // Replace with your Bot API token

app.use(bodyParser.json());

app.post('/game', (req, res) => {
    const { userId, action } = req.body;
    let responseText = '';

    switch(action) {
        case 'spin':
            responseText = `User ${userId} spun the wheel and won ${Math.random() * 100}!`;
            break;
        case 'bid':
            responseText = `User ${userId} placed a bid of ${Math.random() * 50}.`;
            break;
        case 'boost':
            responseText = `User ${userId} used a boost!`;
            break;
        default:
            responseText = 'Invalid action.';
    }

    axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: userId,
        text: responseText
    }).then(() => {
        res.send({ success: true, message: responseText });
    }).catch((err) => {
        console.error(err);
        res.send({ success: false, error: err });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
