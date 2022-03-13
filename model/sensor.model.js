module.exports = (mongoose) => {
    const Sensor = mongoose.model(
        "sensor",
        mongoose.Schema({
            device: {
                type: String
            },
            data: {
                type: String
            },
        }, {
            timestamps: true
        })
    )
    return Sensor;
}