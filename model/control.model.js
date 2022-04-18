module.exports = (mongoose) => {

    const Control = mongoose.model(
        "control",
        mongoose.Schema({
            ph_up: {
                status: {
                    type: Boolean,
                    default: false
                }
            },
            ph_down: {
                status: {
                    type: Boolean,
                    default: false
                }
            },
            nutrition_up: {
                status: {
                    type: Boolean,
                    default: false
                }
            },
            nutrition_down: {
                status: {
                    type: Boolean,
                    default: false
                }
            },
            water_pump: {
                status: {
                    type: Boolean,
                    default: false
                }
            },
            uv_light: {
                status: {
                    type: Boolean,
                    default: false
                }
            }
        })
    )

    return Control;
}