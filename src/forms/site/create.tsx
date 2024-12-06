/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from "@mui/material"
import { ReactNode, useState } from "react"
import { MiningSite } from "../../model/miningSite"
import { MiningSiteStatus } from "../../constants/enums/miningSiteStatus"
import { MiningSiteServices } from "../../services/siteServices"
import { toast, Toaster } from "sonner"

export const CreateNewSite=(prop:{children:ReactNode})=>{
    const [site,setSite]=useState<MiningSite>({
        id:'',
        address:'',
        name:'',
        status:MiningSiteStatus.ACTIVE
    });
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        new MiningSiteServices().createMiningSite(site).then(
            data=>toast.success(data.data)
        ).catch(
            err=>console.error(err)
        )
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 ">
    {prop.children}
    <div className="p-2 flex flex-col gap-y-5">
    <TextField value={site.name} onChange={(e)=>setSite({...site,name:e.target.value})} required label='Site Name'/>
    <TextField value={site.address} onChange={(e)=>setSite({...site,address:e.target.value})} required label='Site Location'/>
    <select onChange={e=>setSite({...site,status:e.target.value as MiningSiteStatus})} required>
        <option value={MiningSiteStatus.ACTIVE}>Active</option>
        <option value={MiningSiteStatus.INACTIVE}>In Active</option>
        <option value={MiningSiteStatus.CLOSED}>Closed</option>
        
    </select>
    <div className="flex justify-between">
       <Toaster position="top-right"/>
    <button type="submit" className="bg-blue-950 text-white p-2 rounded-md">Add Site</button>
    </div>
    </div>
    </form>
}