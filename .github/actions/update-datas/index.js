const core = require('@actions/core');
const axios = require('axios');

const internalApiUrl = process.env.API_INTERNAL_DB_URL;
const externalApiUrl = process.env.API_EXTERNAL_DB_URL;
const surveyApiUrl = process.env.API_SURVEY_DB_URL;

const fetchData = async (apiUrl, sheetName) => {
  const { data } = await axios.get(apiUrl, {
    params: {
      sheetName,
    },
  });
  return data;
};

const getSheetDatas = async () => {
  // メンバー
  const memberData = await fetchData(internalApiUrl, 'member');
  const member = memberData.filter(data => data.isPublic);
  // 論文
  const publicationData = await fetchData(internalApiUrl, 'publication');
  const publication = publicationData.filter(data => data.isPublic);
  core.setOutput('about', { members: member, publications: publication });

  // オープンビデオゲーム
  const openVideoGameData = await fetchData(internalApiUrl, 'openvideogame');
  const game = { games: openVideoGameData.filter(data => data.isPublic) };
  core.setOutput('game', game);

  // 動物ゲームのサーベイ論文
  const animalsPapersData = await fetchData(surveyApiUrl, 'animals');
  // FPSゲームのサーベイ論文
  const fpsPapersData = await fetchData(surveyApiUrl, 'fps');
  // テニスゲームのサーベイ論文
  const tennisPapersData = await fetchData(surveyApiUrl, 'tennis');
  // 共通体験サンプルのサーベイ論文
  const cesPapersData = await fetchData(surveyApiUrl, 'ces');
  core.setOutput('survey', {
    animalsPapers: animalsPapersData,
    fpsPapers: fpsPapersData,
    tennisPapers: tennisPapersData,
    cesPapers: cesPapersData,
  });

  // 内部ツール
  const internalToolData = await fetchData(internalApiUrl, 'tool');
  const internalTool = internalToolData.filter(data => data.isPublic);
  // 外部ツール
  const externalToolData = await fetchData(externalApiUrl, 'tool');
  const externalTool = externalToolData.filter(data => data.isPublic);
  // ピックアップツール
  const pickedToolData = await fetchData(externalApiUrl, 'pickup');
  core.setOutput('tool', {
    internalTools: internalTool,
    externalTools: externalTool,
    pickedTools: pickedToolData,
  });

  // オープンソースゲーム
  const opensSourceGameData = await fetchData(externalApiUrl, 'opensourcegame');
  const sportsGames = opensSourceGameData.filter(data => data.genre === 'sports' && data.isPublic);
  const shootingGames = opensSourceGameData.filter(data => data.genre === 'shooting' && data.isPublic);
  const platformGames = opensSourceGameData.filter(data => data.genre === 'platform' && data.isPublic);
  const fightingGames = opensSourceGameData.filter(data => data.genre === 'fighting' && data.isPublic);
  const puzzleGames = opensSourceGameData.filter(data => data.genre === 'puzzle' && data.isPublic);
  const drivingGames = opensSourceGameData.filter(data => data.genre === 'driving' && data.isPublic);
  const otherGames = opensSourceGameData.filter(data => data.genre === 'other' && data.isPublic);
  // ブラウザゲーム
  const browserGameData = await fetchData(externalApiUrl, 'browsergame');
  const browserGames = browserGameData.filter(data => data.isPublic);
  // フレームワーク
  const frameworkData = await fetchData(externalApiUrl, 'framework');
  const frameworks = frameworkData.filter(data => data.isPublic);
  // 3Dモデル
  const modelData = await fetchData(externalApiUrl, 'asset_3Dmodel');
  const models = modelData.filter(data => data.isPublic);
  // サウンド
  const soundData = await fetchData(externalApiUrl, 'asset_sound');
  const sounds = soundData.filter(data => data.isPublic);
  // グラフィック・UI
  const graphicData = await fetchData(externalApiUrl, 'asset_graphic');
  const graphics = graphicData.filter(data => data.isPublic);
  core.setOutput('extool', {
    opensSourceGames: {
      sportsGames: sportsGames,
      shootingGames: shootingGames,
      platformGames: platformGames,
      fightingGames: fightingGames,
      puzzleGames: puzzleGames,
      drivingGames: drivingGames,
      otherGames: otherGames,
    },
    browserGames: browserGames,
    frameworks: frameworks,
    assets: {
      models: models,
      sounds: sounds,
      graphics: graphics,
    },
  });
};

try {
  getSheetDatas();
}
catch (error) {
  core.setFailed(error.message);
}
