import { MiningSite } from "../model/miningSite";
import { Axios } from "../util/axios";

export class MiningSiteServices {
    public async createMiningSite(site:MiningSite){
        return Axios().post('/mining-site/create',site);
    }
    public async getAll(){
        return Axios().get('/mining-site/get-all');
    }
}