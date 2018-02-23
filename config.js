/**
 * Created by LAKSHMIDEVI on 06-02-2018.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
   specs: ["lak.js"],


    capabilities: {
        browserName: 'chrome',

    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 2500000
    },
};
