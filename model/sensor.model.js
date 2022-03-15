module.exports = (mongoose) => {
    const moment = require("moment");

    const indonesiaTime = moment().format();
    console.log('indonesiaTime', indonesiaTime)
    const Sensor = mongoose.model(
        "sensor",
        mongoose.Schema({
            device: {
                type: String
            },
            data: {
                type: String
            }
        }, {
            timestamps: true
        })
    )
    return Sensor;
}