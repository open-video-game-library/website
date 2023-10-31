const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const getSheetDatas = async () => {
    const internalApiUrl = process.env.API_INTERNAL_DB_URL;
    const externalApiUrl = process.env.API_EXTERNAL_DB_URL;
    const surveyApiUrl = process.env.API_SURVEY_DB_URL;

    // オープンビデオゲーム
    const { data: openVideoGameData } = await axios.get(internalApiUrl, {
        params: {
            sheetName: "openvideogame",
        }
    });
    const game = { "games": openVideoGameData.filter((data) => data.isPublic) };
    core.setOutput("game", game);

    // 内部ツール
    const { data: internalToolData } = await axios.get(internalApiUrl, {
        params: {
            sheetName: "tool",
        }
    });
    const internalTool = internalToolData.filter((data) => data.isPublic);
    // 外部ツール
    const { data: externalToolData } = await axios.get(externalApiUrl, {
        params: {
            sheetName: "tool",
        }
    });
    const externalTool = externalToolData.filter((data) => data.isPublic);
    // ピックアップツール
    const { data: pickedToolData } = await axios.get(externalApiUrl, {
        params: {
            sheetName: "pickup",
        }
    });
    core.setOutput("tool", { "internalTools": internalTool, "externalTools": externalTool, "pickedTools": pickedToolData});
};

try {
    getSheetDatas();
} catch (error) {
    core.setFailed(error.message);
}
