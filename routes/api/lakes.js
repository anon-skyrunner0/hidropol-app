module.exports = (app) => {
    const axios = require('axios');
    const router = require('express').Router();

    router.get('/', (req, res) => {
        const api = "https://testing-z.herokuapp.com"

        async function apiCall() {
            //set controller
            axios.get(`${api}/api/sensors/device/ph_sensor`)
                .then(function (res) {
                    const ph = res.data[0].data;

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

            axios.get(`${api}/api/sensors/device/nutrition_sensor`)
                .then(function (res) {
                    const nutrition = res.data[0].data;
                    if (nutrition >= 900) {
                        axios.put(
                                `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`, {
                                    nutrition_up: {
                                        status: false,
                                    },
                                    nutrition_down: {
                                        status: false,
                                    }
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

            //fetch api
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