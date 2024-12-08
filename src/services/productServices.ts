import { Product } from "../model/product";
import { Axios } from "../util/axios";
import { PageInput } from "../util/page";

export class ProductServices{
    public async getAllProducts() {
        return Axios().get(`/product/get-all`); 
    }
    public async createProduct(product:Product){
        return Axios().post(`/product/create`,product); 
    }
    public async productList(page:PageInput){
        return Axios().post(`/product/find-all`,page); 
    }
    public async deleteProduct(id:PageInput){
        return Axios().delete(`/product/delete-product/${id}`); 
    }
}