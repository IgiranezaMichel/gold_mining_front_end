/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { MiningSiteServices } from "../../services/siteServices"
import { toast, Toaster } from "sonner"
import { ProductQuality } from "../../constants/enums/productQuality"
import { Product } from "../../model/product"
import { ProductCategory } from "../../constants/enums/productCategory"
import { ProductServices } from "../../services/productServices"

export const CreateNewProduct = () => {
    const [product, setProduct] = useState<Product>({
        id: '',
        category: ProductCategory.NOT_REFINED,
        miningSiteId: '',
        price: 0,
        quality: ProductQuality.LOW,
        name: ''
    });
    const [sites, setSite] = useState([]);
    useEffect(() => {
        new MiningSiteServices().getAll().then((res) => {
            setSite(res.data)
        })
    }, [])
    const handleSubmit = (e: any) => {
        e.preventDefault();
        new ProductServices().createProduct(product).then(
            data => toast.success(data.data)
        ).catch(err => toast.error(err.response.data))
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 ">
        <div className="p-2 flex flex-col gap-y-5">
            <TextField value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required label='Gold Name' />
            <div className="text-black">
                Gold Site
            </div>
            <select onChange={e => setProduct({ ...product, miningSiteId: e.target.value })} required className="text-black border border-gray-300 rounded-md p-2">
                <option hidden>Select Gold Site</option>
                {sites.map((data: any) => <option value={data.id}>{data.name}</option>)}
            </select>
            <div className="text-black">
                Gold quality
            </div>
            <select required onChange={e => setProduct({ ...product, quality: e.target.value as ProductQuality })} className="text-black border border-gray-300 rounded-md p-2">
                <option value={ProductQuality.LOW}>lOW</option>
                <option value={ProductQuality.MEDIUM}>MEDIUM</option>
                <option value={ProductQuality.HIGH}>HIGH</option>
            </select>
            <TextField value={product.price} onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })} required label='Gold Price/kg' InputProps={{ endAdornment: <IconButton>$</IconButton> }} />
            <div className="flex justify-between">
                <Toaster position="top-right" />
                <button type="submit" className="bg-blue-950 text-white p-2 rounded-md">Add Product</button>
            </div>
        </div>
    </form>
}