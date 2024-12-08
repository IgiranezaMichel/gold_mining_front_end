import { Route, Routes } from "react-router-dom"
import { AdminHomePage } from "."
import { AdminManageUserUI } from "./users"
import { AdminStockManagementUI } from "./stock"
import { AdminManageIncidentUI } from "./incidence"
import { AdminManageMiningUI } from "./mining"

export const AdminRoutes = () => {
    return <>
        <Routes>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<AdminManageUserUI />} />
            <Route path="stock" element={<AdminStockManagementUI />} />
            <Route path="incidence" element={<AdminManageIncidentUI />} />
            <Route path="mining" element={<AdminManageMiningUI />} />
            <Route path="mining" element={<AdminManageMiningUI />} />
            <Route path="mining" element={<AdminManageMiningUI />} />
            
        </Routes>
    </>
}