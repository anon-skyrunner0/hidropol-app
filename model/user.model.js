module.exports = (mongoose) => {
    const User = mongoose.model(
        "user",
        mongoose.Schema({
            username: String,
            password: String,
        }, {
            timestamps: true
        })
    )
    return User;
}