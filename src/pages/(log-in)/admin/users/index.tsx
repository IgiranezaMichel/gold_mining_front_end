import { AdminMenu } from "../../../../util/menu/admin"
import UserNavigationBar from "../../components/navigation"

export const AdminManageUserUI=()=>{
    return <>
    <UserNavigationBar  menu={<AdminMenu/>}>
        <div>
            
        </div>
    </UserNavigationBar>
    </>
}