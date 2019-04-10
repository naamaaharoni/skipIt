(function () {
    let appToken
    let editorSDK

    const platformAppDefId = '14e39e43-faf2-be79-f3dc-802b887353fc'
    const skipItWidget = '488ddfc1-2886-4112-947b-b2054f4150c7'
    const skipperWidget = 'rjvq0'
    // const adminPagesApp = '1514b01b-cb08-41b4-8582-0a88551ac769'
    const adminWidget = '9f0bf992-eaff-4467-92a6-6a5d6696337a'
    module.exports = {
        editorReady: async function (_editorSDK, _appToken, {firstInstall}) {
            editorSDK = _editorSDK
            appToken = _appToken

            if (firstInstall) {
                await editorSDK.application.install(appToken, {appDefinitionId: skipItWidget})

                const publicApi = await editorSDK.application.getPublicAPI(appToken, {appDefinitionId: skipItWidget})
                await publicApi.addWidget(skipperWidget)

                const firstPageRef = await editorSDK.pages.getCurrent()

                // await editorSDK.application.install(appToken, {appDefinitionId: adminPagesApp})

                await editorSDK.application.install(appToken, {appDefinitionId: adminWidget})
                const pageRef = editorSDK.pages.add(appToken, {title: 'skipIt-manager', hidePage: true})
                await editorSDK.pages.permissions.updatePagePassword(appToken, {pageRef, plainPassword: '1111'})
                await publicApi.addWidget(adminWidget)

                await editorSDK.pages.navigateTo(appToken, {pageRef: firstPageRef})
            }
        },
        onEvent: function (args) {

        },
    }
})()
