import { Close, Print } from "@mui/icons-material"
import { Box, Modal } from "@mui/material"
import { CreateNewSite } from "../../../../../../forms/site/create"
import { useState } from "react"
import ViewSites from "./view/site/viewSite"
import NewProduct from "./view/product/newProduct"
import { ViewProduct } from "./view/product"
import { DisplayProductInStock } from "./view/stock/display"
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

        
        <div className="bg-slate-500 text-clip text-white p-2 rounded-md my-2">
        <h1 className="text-center p-1">Stock Management tools</h1>
             <div className="grid grid-cols-3 gap-3">
                <div className=" bg-red-500/20 text-center p-1">
                    <div className="text-sm mb-1 font-bold">
                       Stock
                    </div>
                    <div className="flex justify-center  m-auto gap-2">
                        <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Print/></button>
                    </div>
                </div>
                <div className=" bg-yellow-500/20 text-center p-1">
                    <div className="text-sm mb-1 font-bold">
                       Product
                    </div>
                    <div className="flex gap-2">
                    <NewProduct />
                        <ViewProduct />
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
         <DisplayProductInStock/>

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