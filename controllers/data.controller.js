let results = [];

// API 1
app.get("/test1", (req, res, next) => {
    axios
        .get(
            "http://testing-z.herokuapp.com/api/sensors/device/nutrition_sensor"
        )
        .then((response) => {
            results.push(response.data);
        });
});

// API 2
app.get("/test2", (req, res, next) => {
    axios
        .get(
            "http://testing-z.herokuapp.com/api/sensors/device/nutrition_sensor"
        )
        .then((response) => {
            results.push(response.data);
        });
});