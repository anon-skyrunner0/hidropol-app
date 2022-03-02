module.exports = (mongoose) => {
    const Control = mongoose.model(
        "Control",
        mongoose.Schema({
            ph_up: {
                type: Boolean,
                default: 0,
            },
            ph_down: {
                type: Boolean,
                default: 0,
            },
            tds_control: {
                type: Boolean,
                default: 0,
            },
            uv_control: {
                type: Boolean,
                default: 0,
            },
            water_pump: {
                type: Boolean,
                default: 0
            }
        }, {
            timestamps: true
        })
    )
    return Control;
}