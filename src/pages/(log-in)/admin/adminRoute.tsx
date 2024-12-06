import { Route, Routes } from "react-router-dom"
import { AdminHomePage } from "."
import { AdminManageUserUI } from "./users"
import { AdminStockManagementUI } from "./stock"

export const AdminRoutes = () => {
    return <>
        <Routes>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<AdminManageUserUI />} />
            <Route path="stock" element={<AdminStockManagementUI />} />
        </Routes>
    </>
}