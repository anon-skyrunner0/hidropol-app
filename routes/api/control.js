module.exports = (app) => {
    const controls = require("../../controllers/control.controller")
    const router = require('express').Router();

    router.get('/', controls.findAll);
    router.post('/', controls.create);
    router.get('/:key/:value', controls.findByKey);
    router.put('/:key/:value', controls.updateByKey);
    router.delete('/:id', controls.delete);
    router.put('/:id', controls.update);
    router.get('/:id', controls.findOne);

    app.use('/api/controls', router);
}