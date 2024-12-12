import ApiClient from "../ApiClient.js";
    import WelcomeMessage from '../model/WelcomeMessage.js';

export default class WelcomeControllerApi {
constructor(apiClient) {
this.apiClient = apiClient || ApiClient.instance;
}

        getRandomWelcomeWithHttpInfo() {
        const postBody = null;
        return this.apiClient.callApi('/welcome', 'GET', {}, {}, {}, {}, postBody, [], ['application/json'], 'WelcomeMessage');
        }

        getRandomWelcome() {
        return this.getRandomWelcomeWithHttpInfo()
        .then(function(response_and_data) {
        return response_and_data.data;
        });
        }
}