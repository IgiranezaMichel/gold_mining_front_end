import { ProductCategory } from "../constants/enums/productCategory";
import { ProductQuality } from "../constants/enums/productQuality";

export type Product = {
    id: string
    name:string
    miningSiteId:string
    category: ProductCategory
    quality: ProductQuality
    price: number
}