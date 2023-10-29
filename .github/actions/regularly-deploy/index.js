const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');
const fs = require('fs');

const createJsonFile = (data, fileName) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile(`../../../assets/json/${fileName}.json`, jsonData, (err) => {
        if (!err) {
            console.log('JSONファイルを生成しました');
        }
    });
};

const getSheetDatas = async () => {
    const internalApiUrl = process.env.API_INTERNAL_DB_URL;
    const externalApiUrl = process.env.API_EXTERNAL_DB_URL;
    const surveyApiUrl = process.env.API_SURVEY_DB_URL;

    const { data: gameData } = await axios.get(internalApiUrl, {
        params: {
            sheetName: "openvideogame",
        }
    });
    const games = gameData.filter((data) => data.isPublic);

    createJsonFile(games, 'games'); 
};

try {
    getSheetDatas();
} catch (error) {
    core.setFailed(error.message);
}
