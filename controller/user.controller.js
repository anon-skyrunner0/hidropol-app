const db = require('../model/')
const User = db.user

exports.findAll = (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Something's Wrong !"
            })
        })
}

exports.create = (req, res) => {
    const userData = new User({
        username: req.body.username,
        password: req.body.password
    })

    userData.save(userData)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Can't Save User !"
            })
        })
}

// exports.create = (req, res) => {
//     const sensorData = new Sensor({
//         device: req.body.device,
//         data: req.body.data
//     })

//     sensorData.save(sensorData)
//         .then((result) => {
//             res.send(result)
//         }).catch((err) => {
//             res.status(409).send({
//                 messages: err.message || "Can't Save Data !"
//             })
//         })

// }

// exports.findOne = (req, res) => {
//     const id = req.params.id

//     Sensor.findById(id)
//         .then((result) => {
//             res.send(result)
//         }).catch((err) => {
//             res.status(409).send({
//                 message: err.message || "Error finding data !"
//             })
//         })
// }


// exports.update = (req, res) => {
//     const id = req.params.id

//     Sensor.findByIdAndUpdate(id, req.body)
//         .then((result) => {
//             if (!result) {
//                 res.status(404).send({
//                     messages: "Not Found !"
//                 })
//             }
//             res.send({
//                 messages: "Updated Successfully !"
//             })
//         }).catch((err) => {
//             res.status(409).send({
//                 messages: err.message || "Failed to update !"
//             })
//         })
// }

// exports.delete = (req, res) => {
//     const id = req.params.id

//     Sensor.findByIdAndRemove(id)
//         .then((result) => {
//             if (!result) {
//                 res.status(404).send({
//                     message: "Not Found !"
//                 })
//             }
//             res.send({
//                 message: "Sucessfully removed !"
//             })
//         }).catch((err) => {
//             res.status(409).send({
//                 messages: err.message || "Failed to remove !"
//             })
//         })
// }