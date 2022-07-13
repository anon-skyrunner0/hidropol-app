module.exports = (app) => {
    const axios = require('axios');
    const router = require('express').Router();

    router.get('/', (req, res) => {
        const api = "https://testing-z.herokuapp.com"

        async function apiCall() {
            try {
                const {
                    data: controls
                } = await axios.get(`${api}/api/controls/625cfa9898b4120cea428ac4`);
                const {
                    data: phStatus
                } = await axios.get(`${api}/api/sensors/device/ph_sensor`);
                const {
                    data: nutriStatus
                } = await axios.get(`${api}/api/sensors/device/nutrition_sensor`);
                const {
                    data: waterHeightStatus
                } = await axios.get(`${api}/api/sensors/device/water_height_sensor`);
                res.json({
                    controls,
                    phStatus,
                    nutriStatus,
                    waterHeightStatus
                });
            } catch (error) {
                console.log(error);
            }
        }

        apiCall();

    })

    app.use('/api/resources', router);
}