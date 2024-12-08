/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react"
import { ProductServices } from "../../../../../../../../services/productServices"
import { PageInput } from "../../../../../../../../util/page"
import { MiningSiteStatus } from "../../../../../../../../constants/enums/miningSiteStatus"
import { LocationOn, PermIdentity, Search, SignalWifiStatusbar4Bar } from "@mui/icons-material"
import { Pagination, Stack, TextField } from "@mui/material"
import { PrintProductList } from "./print"

export const DisplayProduct = (prop: { children: ReactNode }) => {
    const [products, setProducts] = useState<any>([])
    const [page, setPage] = useState<PageInput>({
        pageNumber: 0, pageSize: 10, search: '', sortBy: 'id'
    })
    const handleChange = (event: any, value: any) => {
        console.log(event);
        setPage({
            ...page, pageNumber: value - 1
        });
    };
    useEffect(
        () => {
            new ProductServices().productList(page)
                .then((res) => {
                    setProducts(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }, [page]

    )
    return <div>
        <main className="p-2">
            {prop.children}
            <section className="mb-1 flex justify-between items-center">
                <div>
                    <TextField placeholder="search ..." value={page.search} onChange={e => setPage({ ...page, search: e.target.value })} InputProps={{ endAdornment: <Search /> }} />
                </div>
                <div>
                    <PrintProductList/>
                </div>
            </section>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase  bg-blue-950 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Gold category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Site
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quality
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products != undefined && products.data != undefined && products.data.length != 0 && products.data.map((item: any) => <tr key={item.id}
                            className={`${item.status == MiningSiteStatus.ACTIVE ? 'bg-white' : item.status == MiningSiteStatus.INACTIVE ? 'bg-slate-400' : 'bg-red-300 text-black'} 
                     border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                <div><PermIdentity className="text-sm pr-2" />{item.miningSite.name}</div>
                                <div><LocationOn className="text-sm pr-2" />{item.miningSite.address}</div>
                                <div><SignalWifiStatusbar4Bar className="text-sm pr-2" />{item.miningSite.status.toLowerCase()}</div>
                            </td>
                            <td className="px-6 py-4">
                                {item.price} $ /kg
                            </td>
                            <td className="px-6 py-4">
                                {item.category}
                            </td>
                            <td className="px-6 py-4">
                                {item.quality}
                            </td>
                        </tr>)}
                        <tr>
                            {products != undefined && products.data != undefined && products.data.length == 0 && <td colSpan={6} className="text-center">No data found</td>}
                        </tr>
                    </tbody>
                </table>
                {products != undefined && products.data != undefined && products.data.length > 0 &&
                    <td colSpan={5} className="text-center flex justify-between items-center p-2">
                        <div>
                            Page {products.pageNumber + 1} of {products.pageSize}
                            <select onChange={e => setPage({ ...page, pageSize: Number(e.target.value) })} name="" id="">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <Stack spacing={2}>
                            <Pagination
                                count={products.pageSize}
                                page={products.pageNumber}
                                onChange={handleChange}
                                color="primary"
                                size="small"
                                variant="outlined"
                            />
                        </Stack>
                    </td>}
            </div>
        </main>
    </div>
}