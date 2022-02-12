module.exports = (app) => {
    app.use("/api/data_sensor", require("../routes/api/sensor"));
};