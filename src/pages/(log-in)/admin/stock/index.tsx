import { AdminMenu } from "../../../../util/menu/admin"
import UserNavigationBar from "../../components/navigation"
import { StockManagement } from "./components/stockmanagement/stockManagement"
import { StockSummary } from "./components/stockSummary"

export const AdminStockManagementUI = () => {
    return <UserNavigationBar menu={<AdminMenu />}>
        <div className="p-3">
            <StockSummary />
           
            <StockManagement/>
        </div>
    </UserNavigationBar>
}