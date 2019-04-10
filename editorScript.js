(function () {
    let appToken
    let editorSDK

    const platformAppDefId = '14e39e43-faf2-be79-f3dc-802b887353fc'
    const skipItWidget = '488ddfc1-2886-4112-947b-b2054f4150c7'
    const skipperWidget = 'jvq01'
    const adminWidget = ''
    module.exports = {
        editorReady: async function (_editorSDK, _appToken, {firstInstall}) {
            editorSDK = _editorSDK
            appToken = _appToken

            if (firstInstall) {
                await editorSDK.application.install(appToken, {appDefinitionId: skipItWidget})

                const publicApi = await editorSDK.application.getPublicApi(appToken, {appDefinitionId: skipItWidget})
                await publicApi.addWidget(skipperWidget)
            }
        },
        onEvent: function (args) {

        },
    }
})()
