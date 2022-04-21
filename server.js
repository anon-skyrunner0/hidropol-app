const express = require('express');
const cors = require('cors');
const axios = require('axios');
const http = require('http');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))

const db = require('./model');
const {
    response
} = require('express');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: true,
        w: "majority",
    })
    .then(() => {
        console.log(`Database Connected !`);
    }).catch((err) => {
        console.log(`Can't Connect to Database !`, err);
        process.exit();
    })

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({
        messages: "Welcome to HidroPol"
    })
});

app.get('/test', (req, res) => {
    const api = "https://testing-z.herokuapp.com"

    async function apiCall() {
        try {
            const {
                data: controls
            } = await axios.get(`${api}/api/controls`);
            const {
                data: phStatus
            } = await axios.get(`${api}/api/sensors/device/ph_sensor`);
            const {
                data: nutriStatus
            } = await axios.get(`${api}/api/sensors/device/nutrition_sensor`);
            const {
                data: waterHeightStatus
            } = await axios.get(`${api}/api/sensors/device/water_height_sensor`);
            res.json({
                controls,
                phStatus,
                nutriStatus,
                waterHeightStatus
            });
        } catch (error) {
            console.log(error);
        }
    }

    apiCall();

})


require('./routes/api/sensor')(app);
require('./routes/api/user')(app);
require('./routes/api/control')(app);
require('./routes/api/lakes')(app);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`)
})