/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useEffect, useState } from "react"
import { BarChart, LocationOn, PermIdentity, Search, SignalWifiStatusbar4Bar } from "@mui/icons-material"
import { InventoryServices } from "../../../../../../../../services/inventoryServices"
import { IconButton, TextField } from "@mui/material";
import { StockSettingUI } from "./settings";

export const DisplayProductInStock = () => {
    // const [page, setPage] = useState<PageInput>({
    //     pageNumber: 0, pageSize: 10, search: '', sortBy: 'id'
    // })
    // const handleChange = (event: any, value: any) => {
    //     console.log(event);
    //     setPage({
    //         ...page, pageNumber: value - 1
    //     });
    // };
    const [stockItems, setStockItems] = useState([]);
    useEffect(
        () => {
            new InventoryServices().inventoryListItems().then(
                data => {setStockItems(data.data);console.log(data.data);
                }
            ).catch(
                err => console.error(err)
            )
        }, []
    )
    return <div>
        <main className="">
          
            <section className="  flex justify-between items-center p-2 bg-blue-950 text-white mb-1">
            <div className="font-bold">
                List of available products in stock
            </div>
                <div>
                     <div>
                    <TextField placeholder="search ..." InputProps={{ endAdornment: <Search /> }} />
                </div>
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
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockItems != undefined && stockItems.map((item: any) => <tr key={item.id}
                            className={`
                     border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.productName}
                            </th>
                            <td className="px-6 py-4">
                                <div><PermIdentity className="text-sm pr-2" />{item.productMiningSiteName}</div>
                                <div><LocationOn className="text-sm pr-2" />{item.productMiningSiteLocation}</div>
                                <div><SignalWifiStatusbar4Bar className="text-sm pr-2" />{item.productMiningSiteStatus}</div>
                            </td>
                            <td className="px-6 py-4">
                                {item.productPrice} $ per kg
                            </td>
                            <td className="px-6 py-4">
                                {item.productCategory.toLowerCase().split('_')[0]} {item.productCategory.toLowerCase().split('_')[1]}
                            </td>
                            <td className="px-6 py-4">
                                {item.productQuality.toLowerCase()}
                            </td>
                            <td className="px-6 py-4">
                                {Number(item.inventoryQtyInStock)} Kg
                            </td>
                            <td className="">
                                <div className="flex justify-between items-center p-2">
                                <IconButton>
                                    <StockSettingUI stock={item}/>
                                </IconButton> 
                                <IconButton>
                                    <BarChart/>
                                </IconButton>
                                </div>
                            </td>
                        </tr>)}
                        <tr>
                            {stockItems != undefined && stockItems.length == 0 && <td colSpan={6} className="text-center">No data found</td>}
                        </tr>
                    </tbody>
                </table>
                {/* {stockItems != undefined && stockItems.length > 0 &&
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
                    </td>} */}
            </div>
        </main>
    </div>
}