const getSheetDatas = async () => {
    const core = require('@actions/core');
    const github = require('@actions/github');
    const axios = require('axios');

    try {
        axios.get('https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec', {
            params: {
                sheetName: "openvideogame",
            }
        }).then((response) => {
            // handle success
            console.log('response', response);
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
