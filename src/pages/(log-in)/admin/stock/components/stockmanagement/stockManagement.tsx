import { Close, Print, Search } from "@mui/icons-material"
import { Box, Modal, TextField } from "@mui/material"
import { CreateNewSite } from "../../../../../../forms/site/create"
import { useState } from "react"
import ViewSites from "./viewSite"
import NewProduct from "./newProduct"
type DialogBoxProps = {
    open: boolean,
    type: string,
    data?: string
}
export const StockManagement = () => {
    const [openDialog, setOpenDialog] = useState<DialogBoxProps>({
        open: false,
        type: ""
    })
    const handleCloseDialog = () => {
        setOpenDialog({
            open: false,
            type: ""
        })
    }

    return <>

        <h1>Stock Management</h1>
        <div className="flex justify-between items-center mb-4">
            <TextField placeholder="search ..." InputProps={{ endAdornment: <Search /> }} />
            <div className="flex gap-3">
                <div className=" bg-red-500/20 text-center p-1">
                    <div className="text-sm mb-1 font-bold">
                       Stock
                    </div>
                    <div className="flex gap-2">
                    <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add new stock</button>
                        <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Print/></button>
                    </div>
                </div>
                <div className=" bg-yellow-500/20 text-center p-1">
                    <div className="text-sm mb-1 font-bold">
                       Product
                    </div>
                    <div className="flex gap-2">
                    <NewProduct />
                        <ViewSites />
                    </div>
                </div>
                <div className=" bg-blue-500/20 text-center p-1">
                    <div className="text-sm mb-1 font-bold">
                        Mining site
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                setOpenDialog({
                                    open: true,
                                    type: "new-site"
                                })
                            }}>Add site
                        </button>
                        <ViewSites />
                    </div>
                </div>
            </div>
        </div>
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
                            Quantity
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <Modal open={openDialog.open && openDialog.type === 'new-site'} onClose={handleCloseDialog} >
            <Box className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-auto h-max-[90dvh] overflow-x-auto bg-white rounded-lg shadow-lgfirst-line:'>
                <CreateNewSite>
                    <div className="flex items-center justify-between mb-6 bg-blue-950 p-3 gap-16">
                        <h5 className="text-xl font-bold leading-none text-white">Create New Site</h5>
                        <button
                            onClick={() => setOpenDialog({ open: false, type: 'new-site' })}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal"
                        >
                            <Close />
                        </button>
                    </div>
                </CreateNewSite>
            </Box>
        </Modal>
    </>
}