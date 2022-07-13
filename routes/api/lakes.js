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

            axios.get(`${api}/api/sensors/device/ph_sensor`)
                .then(function (res) {
                    const ph = response.data[0].data;

                    //handle ph down
                    if (ph <= 6.2) {
                        axios.put(
                                `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`, {
                                    ph_down: {
                                        status: false,
                                    },
                                }
                            )
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }

                    if (ph >= 6.7) {
                        axios.put(
                                `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`, {
                                    ph_up: {
                                        status: false,
                                    },
                                }
                            )
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }

                }).catch(function (err) {
                    console.log(err);
                });
        }

        setTimeout(apiCall(), 1000);

    })

    app.use('/api/resources', router);
}