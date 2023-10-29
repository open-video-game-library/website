const getSheetDatas = async () => {
    const core = require('@actions/core');
    const github = require('@actions/github');
    const axios = require('axios');

    try {
        const internalApiUrl = process.env.API_INTERNAL_DB_URL;
        console.log("API_INTERNAL_DB_URL = ", internalApiUrl);
        console.log("API_EXTERNAL_DB_URL = ", process.env.API_EXTERNAL_DB_URL);
        console.log("API_SURVEY_DB_URL = ", process.env.API_SURVEY_DB_URL);
        axios.get(internalApiUrl, {
            params: {
                sheetName: "openvideogame",
            }
        }).then(({ data }) => {
            // handle success
            console.log('data', data);
        }).catch((error) => {
            // handle error
            console.log(error)
        }).finally(() => {
            console.log(`always executed`);
        });
    } catch (error) {
        core.setFailed(error.message);
    }
};

getSheetDatas();
