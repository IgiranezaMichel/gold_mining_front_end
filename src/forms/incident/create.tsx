/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { toast, Toaster } from "sonner"
import { Incident } from "../../model/incident"
import { IncidentServices } from "../../services/incidentServices"
import JoditEditor from "jodit-react"
import { Box, Modal } from "@mui/material"
import { Close } from "@mui/icons-material"

export const CreateNewIncident = () => {
    const [incident, setIncident] = useState<Incident>({
        id: '',
        description: ''
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        new IncidentServices().createIncident(incident).then(
            data => toast.success(data.data)
        ).catch(err => console.error(err))
    }
    const [open, setOpen] = useState(false)
    return <>
        <button
            className="bg-blue-950 text-white px-4 py-2 hover:bg-[#3545be] "
            onClick={() => setOpen(true)}>New</button>

        <Modal open={open} onClose={() => setOpen(false)} >
            <>
                <Box className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-auto h-max-[90dvh] overflow-x-auto bg-white rounded-lg shadow-lgfirst-line:'>
                    <div className="flex items-center justify-between bg-blue-950 text-white px-4 py-2 rounded-t-lg m-2">
                        <h1 className="text-xl font-bold">New Incident</h1>
                        <button onClick={() => setOpen(false)} className="text-white"><Close /></button>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 ">
                        <div className="p-2 flex flex-col gap-y-5">
                            <JoditEditor value="" onChange={(e: any) => setIncident({ ...incident, description: e })} />
                            <div className="flex justify-between">
                                <div></div>
                                <button type="submit" className="bg-blue-950 text-white p-2 rounded-md">Add Incidence</button>
                            </div>
                        </div>
                    </form>
                </Box>
                <Toaster position="top-right" />
            </>
        </Modal>

    </>
}