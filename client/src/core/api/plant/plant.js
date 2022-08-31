import BaseApi from "../BaseApi";

class Plant extends BaseApi {

    async createPlant(input) {
        return this.create(input, 'plants/createplant/');
    }

    getResource() {
        return 'login';
    }
}


export default Plant;