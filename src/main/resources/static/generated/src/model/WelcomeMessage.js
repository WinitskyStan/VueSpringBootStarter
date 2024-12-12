import ApiClient from '../ApiClient.js';


export default class WelcomeMessage {
    constructor() {
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WelcomeMessage();
        }
        return obj;
    }
}