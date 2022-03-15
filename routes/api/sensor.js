module.exports = (app) => {
    const sensors = require("../../controllers/sensor.controller")
    const router = require('express').Router();

    router.get('/', sensors.findAll);
    router.post('/', sensors.create);
    router.get('/:id', sensors.findOne);
    router.put('/:id', sensors.update);
    router.delete('/:id', sensors.delete);
    // router.get('/:key/:value', sensors.findByKey);
    router.get('/:key/:value', sensors.findByKeyAndSort);

    app.use('/api/sensors', router);
}