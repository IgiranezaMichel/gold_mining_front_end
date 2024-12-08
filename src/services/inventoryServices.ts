import { Stock } from "../model/stock";
import { Axios } from "../util/axios";
import { PageInput } from "../util/page";

export class InventoryServices{
    public async getAllInventory() {
        return Axios().get(`/inventory/get-all`); 
    }
    public async createInventory(inventory:Stock){
        return Axios().post(`/inventory/create/${inventory.action}`,inventory); 
    }
    public async inventoryListItems(){
        return Axios().get(`/inventory/find-all`); 
    }
    public async deleteInventory(id:PageInput){
        return Axios().delete(`/inventory/delete-inventory/${id}`); 
    }
}