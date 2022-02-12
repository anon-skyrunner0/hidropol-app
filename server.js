const express = require('express');
const cors = require('cors');

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

const db = require('./model')
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

require('./routes/api/sensor')(app);
require('./routes/api/user')(app);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`)
})