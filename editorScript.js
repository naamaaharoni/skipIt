(function () {
    let appToken
    let editorSDK

    const skipItWidget = '488ddfc1-2886-4112-947b-b2054f4150c7'

    module.exports = {
        editorReady: async function (_editorSDK, _appToken, {firstInstall}) {
            editorSDK = _editorSDK
            appToken = _appToken

            if (firstInstall) {
                editorSDK.application.install('token', {appDefinitionId: skipItWidget})
            }
        },
        onEvent: function (args) {

        },
    }
})()
