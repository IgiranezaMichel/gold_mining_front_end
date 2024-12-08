/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState } from "react"
import { toast } from "sonner"
import { Stock } from "../../../model/stock"
import { InventoryServices } from "../../../services/inventoryServices"
import { Box, Modal } from "@mui/material"
import { LocationOn } from "@mui/icons-material"

export const CreateNewstock = (prop: {stock: any }) => {
    const [stock, setStock] = useState<Stock>({
        id: prop.stock.inventoryId,
        productId: prop.stock.productId,
        qtyInStock: 0,
        action: 'add'
    });
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        new InventoryServices().createInventory(stock).then(
            data => toast.success(data.data)
        ).catch(
            err => console.error(err)
        )
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 ">
        <button onClick={() => setOpen(true)} className="bg-blue-950 text-white rounded-lg p-2">
            Add new Stock
        </button>
        <Modal disablePortal={false} className="" open={open} onClose={() => setOpen(false)}>
            <Box className='absolute top-[50%] z-50 left-[50%] translate-x-[-50%] translate-y-[-50%] w-auto h-max-[90dvh] overflow-x-auto bg-white rounded-lg shadow-lgfirst-line:'>
                <div className="flex flex-col gap-y-2">
                    <div className="bg-yellow-500 p-2 rounded-t-lg">
                        {prop.stock.productName}
                    </div>
                   <section className="p-2">
                   <div>
                        site: {prop.stock.productMiningSiteName}
                    </div>
                    <div>
                        <LocationOn />{prop.stock.productMiningSiteLocation}
                    </div>
                    <div>
                        <LocationOn />{prop.stock.productQuality}
                    </div>
                   </section>
                </div>
            </Box>

        </Modal>
    </form>
}