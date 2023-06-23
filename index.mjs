import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const server = express();

server.get('/weather/:cityName', (req, res) => {
    let weatherData = {
        karachi: {
            country: "PK",
            city: "Karachi",
            tempInC: 39,
            humidity: 30,
            low: 25,
            high: 40,
        },
        lahore: {
            country: "PK",
            city: "Lahore",
            tempInC: 24,
            humidity: 35,
            low: 19,
            high: 29,
        },
        sialkot: {
            country: "PK",
            city: "Sialkot",
            tempInC: 32,
            humidity: 40,
            low: 40,
            high: 20,
        },
        islamabad: {
            country: "PK",
            city: "Islamabad",
            tempInC: 37,
            humidity: 34,
            low: 30,
            high: 42,
        },
        queta: {
            country: "PK",
            city: "Queta",
            tempInC: 23,
            humidity: 33,
            low: 15,
            high: 27,
        },
        hyderabad: {
            country: "PK",
            city: "Hyderabad",
            tempInC: 42,
            humidity: 57,
            low: 37,
            high: 46,
        },
        multan: {
            country: "PK",
            city: "Multan",
            tempInC: 39,
            humidity: 37,
            low: 32,
            high: 46,
        },
        umerkot: {
            country: "PK",
            city: "Umerkot",
            tempInC: 37,
            humidity: 33,
            low: 21,
            high: 43,
        },
    }
    let userInputCity = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherData[userInputCity];
    if (weatherDataToSend) {
        res.send(weatherDataToSend);
    } else {
        res.status(404).send(`Can't get Weather For ${userInputCity}`);
    }
});

server.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running o Prot: ${PORT}`);
})