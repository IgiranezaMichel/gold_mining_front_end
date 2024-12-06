import { Modal } from "@mui/material"
import SignUp from "../../auth/signup"
import { useState } from "react"
import { KeyboardArrowLeft } from "@mui/icons-material"
import Login from "../../auth/login"
export const VisitorNavigation = () => {
    const [openDialog,setOpenDialog] = useState({open:false,type:''})
    return <div className="flex justify-between items-center px-8">
        <div className='max-w-6xl mx-auto w-full h-20 flex justify-between items-center px-8'>
            <img src={'../kmine1.png'} className='w-20' alt="Logo" />
            <div className='flex space-x-4 text-lg font-bold'>
                <a href='/' className='cursor-pointer hover:text-primary'>Home</a>
                <a href='/' className='cursor-pointer hover:text-primary'>About Us</a>
                <a href='/products' className='cursor-pointer hover:text-primary'>Product</a>
                <a href='/' className='cursor-pointer hover:text-primary'>Services</a>
                <a href='/' className='cursor-pointer hover:text-primary'>Contact</a>
            </div>
        </div>
        <div className="flex space-x-4">
            <button className="bg-yellow-300 text-black px-4 py-2 rounded-md" onClick={()=>setOpenDialog({open:true,type:'signup'})}>Signup</button>
            <button className="bg-blue-950 text-white px-4 py-2 rounded-md" onClick={()=>setOpenDialog({open:true,type:'login'})}>login</button>
        </div>
        <Modal open={openDialog.open&&openDialog.type==='signup'}>
            <SignUp>
                <button className="p-2 group border font-bold bg-blue-900 text-white" onClick={()=>setOpenDialog({open:false,type:''})}>
                    <KeyboardArrowLeft className="group:hover:scale-125 transition-all duration-300"/>Back</button>
            </SignUp>
        </Modal>
        <Modal open={openDialog.open&&openDialog.type==='login'}>
            <Login>
                <button className="p-2 group border font-bold bg-blue-900 text-white" onClick={()=>setOpenDialog({open:false,type:''})}>
                    <KeyboardArrowLeft className="group:hover:scale-125 transition-all duration-300"/>Back</button>
            </Login>
        </Modal>
    </div>
}