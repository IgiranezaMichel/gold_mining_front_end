export type Stock = {
    id: string
    qtyInStock: number
    productId: string
    action:"add"|"remove"
}