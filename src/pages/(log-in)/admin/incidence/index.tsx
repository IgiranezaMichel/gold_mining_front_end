import { AdminMenu } from "../../../../util/menu/admin"
import UserNavigationBar from "../../components/navigation"

export const AdminManageIncidentUI=()=>{
    return <>
    <UserNavigationBar menu={<AdminMenu/>}>
        <div>
            
        </div>
    </UserNavigationBar>
    </>
}