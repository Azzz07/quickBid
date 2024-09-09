export default function Initialize(context) {
    debugger
    // Perform pre data initialization task

    // Initialize all your Data sources
    let _capoff = context.executeAction('/quickbid/Actions/capoff/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_capoff]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/quickbid/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}