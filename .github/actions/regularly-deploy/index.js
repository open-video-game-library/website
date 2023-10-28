const core = require('@actions/core');
const github = require('@actions/github');
const { GoogleSpreadsheet } = require('google-spreadsheet');

try {
    const doc = new GoogleSpreadsheet("1HR_m-X8kJVhZ3f4FLZkp31MT8eIQLc4t5fah-Y22FsQ");

    core.setOutput("result-message", JSON.stringify(doc));
    console.log("doc", JSON.stringify(doc));
} catch (error) {
    core.setFailed(error.message);
}
