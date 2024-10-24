const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Default route
app.get('/', (req, res) => {
    res.render('home', { message: null });
});

// Input Route
buckleConverter();

// Starting the app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function buckleConverter() {
    // Input route
    app.post('/', (req, res) => {
        if (req.body.number) {
            // convert to integer
            let number = parseInt(req.body.number);
            
            // check if number is valid
            if (isNaN(number) || !Number.isInteger(number)) {
                res.render('home', { message: `Please enter a valid integer.` });
            } else if (number >= 1 && number <= 10) {
                let message = '';
                
                // conditions for rhyme
                if (number === 1 || number === 2) {
                    message = `${number}, buckle my shoe.`;
                } else if (number === 3 || number === 4) {
                    message = `${number}, shut the door.`;
                } else if (number === 5 || number === 6) {
                    message = `${number}, pick up sticks.`;
                } else if (number === 7 || number === 8) {
                    message = `${number}, lay them straight.`;
                } else if (number === 9 || number === 10) {
                    message = `${number}, a big fat hen!`;
                }
                res.render('home', { message });
            } else {
                res.render('home', { message: `Please enter a number between 1 and 10.` });
            }
        } else {
            res.render('home', { message: `Please enter a number.` });
        }
    });
}
