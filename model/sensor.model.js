module.exports = (mongoose) => {
    const Sensor = mongoose.model(
        "sensor",
        mongoose.Schema({
            device: {
                type: String,
                default: "Tidak Ada Device"
            },
            data: {
                type: String,
                default: "Belum Ada Data"
            },
        }, {
            timestamps: true
        })
    )
    return Sensor;
}