/* eslint-disable @typescript-eslint/no-explicit-any */
import { Close } from "@mui/icons-material"
import { Box, IconButton, Modal } from "@mui/material"
import { useState } from "react"

export const UserDetail = (prop: { user: any }) => {
    const [open, setOpen] = useState(false)
    return <>
        <button onClick={() => setOpen(true)} className=" border p-1 border-blue-500 rounded-md bg-blue-950 text-white">detail</button>
        <Modal open={open} onClose={() => setOpen(false)} >
            <Box className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-auto h-max-[90dvh] overflow-x-auto bg-white rounded-lg shadow-lgfirst-line:'>
                <div className="flex items-center justify-between bg-blue-950 p-2 m-2 rounded-t-lg">
                    <h1 className="text-white text-2xl font-bold">Detail User</h1>
                    <IconButton onClick={() => setOpen(false)} className="ml-auto">
                        <Close className="text-white"/>
                    </IconButton>
                </div>
                <div className="flex gap-2">
                    <img src={prop.user.picture} className="w-32 h-32 rounded-full" alt="" />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="w-1/2">
                            <label className="font-bold">Name</label>
                            <p>{prop.user.name}</p>
                        </div>
                        <div className="w-1/2">
                            <label className="font-bold">Email</label>
                            <p>{prop.user.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-1/2">
                            <label className="font-bold">Phone</label>
                            <p>{prop.user.phoneNumber}</p>
                        </div>
                        <div className="w-1/2">
                            <label className="font-bold">Address</label>
                            <p>{prop.user.address}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-1/2">
                            <label className="font-bold">Role</label>
                            <p>{prop.user.role.split('_')[1].toLowerCase()}</p>
                        </div>
                  
                    </div>
                </div>
                </div>
            </Box>
        </Modal>
    </>
}