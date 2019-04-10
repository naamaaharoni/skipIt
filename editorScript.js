(function () {
    let appToken
    let sdk

    module.exports = {
        editorReady: async function (_editorSDK, _appToken, options) {
            sdk = _editorSDK
            appToken = _appToken

            if (options.firstInstall) {

            }
        },
        onEvent: function (args) {},
    }
})()
