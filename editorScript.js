(function () {
    let appToken
    let editorSDK

    const platformAppDefId = '14e39e43-faf2-be79-f3dc-802b887353fc'

    const userAppDefId = '488ddfc1-2886-4112-947b-b2054f4150c7'
    const skipItWidgetId = 'vr54u'

    const adminAppDefId = 'd86ece7e-366f-41c8-8413-409691b63734'
    const adminWidgetId = 'rjvq0'

    module.exports = {
        editorReady: async function (_editorSDK, _appToken, {firstInstall}) {
            editorSDK = _editorSDK
            appToken = _appToken

            if (firstInstall) {
                await editorSDK.application.install(appToken, {appDefinitionId: userAppDefId})
                await editorSDK.application.install(appToken, {appDefinitionId: adminAppDefId})

                const publicApiUser = await editorSDK.application.getPublicAPI(appToken, {appDefinitionId: userAppDefId})
                await publicApiUser.addWidget(skipItWidgetId)

                const pageRef = await editorSDK.pages.add(appToken, {title: 'skipIt-manager', definition: {data: {hidePage: true, pageUriSEO: 'skipit-manager'}}})
                await editorSDK.pages.permissions.updatePagePassword(appToken, {pageRef, plainPassword: '1234'})
                const publicApiAdmin = await editorSDK.application.getPublicAPI(appToken, {appDefinitionId: adminAppDefId})
                await publicApiUser.addWidget(adminWidgetId)

                //await editorSDK.pages.navigateTo(appToken, {pageRef: firstPageRef})
            }
        },
        onEvent: function (args) {

        },
    }
})()
