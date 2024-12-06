import { Sales } from "../model/sale";
import { Axios } from "../util/axios";

export class saleServices{
    public async createSale(sale: Sales){
        const response = await Axios().post('/sales/client/add-or-update', sale);
        return response;
    }
}