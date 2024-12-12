/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import { ContextManager } from "../constants/enums/contextManager";
import { IncidentServices } from "../services/incidentServices";
import { PageInput } from "../util/page";

const IncidentContentext = createContext<ContextManager | undefined>(undefined)
export const useIncidentContext = () => {
    const context = useContext(IncidentContentext)
    if (!context) {
        throw new Error("useIncidentContext must be used within a IncidentContentProvider")
    }
    return context
}
export const IncidentContentProvider = ({ children }: { children: React.ReactNode }) => {
    const [page, setPage] = useState<PageInput>({
        pageNumber: 0, pageSize: 10, search:"", sortBy:'id'})
    const [loading, setLoading] = useState<boolean>(false)
    const [incidentList, setIncidentList] = useState<any>([])
    useEffect(
        () => {
            new IncidentServices()
                .IncidentListItems(page)
                .then(data=>setIncidentList(data.data))
                .catch(err => console.log(err))
        },[page,loading]
    )
    const contextValue:ContextManager = {
        update: (pageInput) => {
            setPage(pageInput)
        },
        refresh:()=>setLoading(!loading),
        data:incidentList
    }
    return (
        <IncidentContentext.Provider value={contextValue}>
            {children}
        </IncidentContentext.Provider>
    )
}