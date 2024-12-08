import { Box, IconButton, Modal } from "@mui/material"
import { useState } from "react"
import { DisplayProduct } from "./displayProduct"
import { Close } from "@mui/icons-material"

export const ViewProduct = () => {
  const [showProduct, setShowProduct] = useState(false)
  return <>
    <button onClick={() => setShowProduct(true)} className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">View Product</button>
    <Modal open={showProduct} onClose={() => setShowProduct(false)} >
      <Box className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-auto h-max-[90dvh] overflow-x-auto bg-white rounded-lg shadow-lgfirst-line:'>
        <DisplayProduct>
          <div className="flex justify-between p-2 bg-blue-950 text-white rounded-lg mb-5">
            <div className="font-bold text-lg">List of available Product </div>
            <IconButton onClick={()=>setShowProduct(false)}>
            <Close className="text-white"/>
            </IconButton>
          </div>
        </DisplayProduct>
      </Box>
    </Modal>
  </>
}