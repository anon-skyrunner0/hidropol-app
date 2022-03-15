module.exports = (mongoose) => {

    const Control = mongoose.model(
        "control",
        mongoose.Schema({
            device: {
                type: String
            },
            status: {
                type: Boolean,
                default: false
            },
        })
    )

    return Control;
}