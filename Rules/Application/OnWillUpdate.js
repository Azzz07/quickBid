/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/quickbid/Actions/Application/OnWillUpdate.action').then((result) => {
        // if (result.data) {
        //     return clientAPI.executeAction('/quickbid/Actions/capoff/Service/CloseOffline.action').then(
        //         (success) => Promise.resolve(success),
                // (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        // } else {
        //     return Promise.reject('User Deferred');
        // }
    // });
  
    // return clientAPI.executeAction('/n44/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
// }