const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const getSheetDatas = async () => {
    const internalApiUrl = process.env.API_INTERNAL_DB_URL;
    const externalApiUrl = process.env.API_EXTERNAL_DB_URL;
    const surveyApiUrl = process.env.API_SURVEY_DB_URL;

    const { data: gameData } = await axios.get(internalApiUrl, {
        params: {
            sheetName: "openvideogame",
        }
    });
    const game = gameData.filter((data) => data.isPublic);
    core.setOutput("game", JSON.stringify(game));
};

try {
    getSheetDatas();
} catch (error) {
    core.setFailed(error.message);
}
