import { useEffect, useState } from "react"
import { IncidentContentProvider } from "../../../../context/incidentContext"
import { CreateNewIncident } from "../../../../forms/incident/create"
import { AdminMenu } from "../../../../util/menu/admin"
import UserNavigationBar from "../../components/navigation"
import { DisplayIncidence } from "./components/view/display"
import { PageInput } from "../../../../util/page"
import { IncidentServices } from "../../../../services/incidentServices"

export const AdminManageIncidentUI=()=>{
    const [page, setPage] = useState<PageInput>({
        pageNumber: 0, pageSize: 10, search:"", sortBy:'id'})
    // const [loading, setLoading] = useState<boolean>(false)
    // const [incidentList, setIncidentList] = useState<any>([])
    useEffect(
        () => {
            new IncidentServices()
                .IncidentListItems(page)
                // .then(data=>setIncidentList(data.data))
                .catch(err => console.log(err))
        },[page]
    )
    return <>
    <UserNavigationBar menu={<AdminMenu/>}>
       {/* <IncidentContentProvider> */}
       <div>
            <div className="flex justify-between items-center m-2">
                <div>
                    Incident list
                </div>
            <CreateNewIncident/>
            </div>
            <DisplayIncidence/>
        </div>
       {/* </IncidentContentProvider> */}
    </UserNavigationBar>
    </>
}