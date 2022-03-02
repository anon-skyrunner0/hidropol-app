module.exports = (app) => {
    const controls = require("../../controllers/control.controller")
    const router = require('express').Router();

    router.get('/', controls.findAll);
    router.post('/', controls.create);
    router.get('/:id', controls.findOne);
    router.put('/:id', controls.update);
    router.delete('/:id', controls.delete)

    app.use('/api/controls', router);
}