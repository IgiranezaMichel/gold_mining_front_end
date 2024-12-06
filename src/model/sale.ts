import { SalesMethod } from "../constants/enums/SalesMethod"

export interface Sales {
      id:string
      inventoryId:string
      orderId:string
      method:SalesMethod
}