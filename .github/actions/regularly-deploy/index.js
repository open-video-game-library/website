const getSheetDatas = async () => {
    const core = require('@actions/core');
    const github = require('@actions/github');
    const { GoogleSpreadsheet } = require('google-spreadsheet');

    try {
        const doc = new GoogleSpreadsheet("1HR_m-X8kJVhZ3f4FLZkp31MT8eIQLc4t5fah-Y22FsQ");
        console.log("doc", JSON.stringify(doc));
        // `who-to-greet` input defined in action metadata file
        const nameToGreet = core.getInput('who-to-greet');
        console.log(`Hello ${nameToGreet}!`);
        const time = (new Date()).toTimeString();
        core.setOutput("time", time);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
    } catch (error) {
        core.setFailed(error.message);
    }
};

getSheetDatas();
