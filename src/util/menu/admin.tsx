import { Dashboard, EmergencyShare, ModelTraining, People, WorkHistory } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom"

export const AdminMenu = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const activeBar = 'border-l-2 font-bold text-blue-200 border-blue-200 flex items-center gap-x-2 cursor-pointer';
    const inactiveBar = 'text-white flex items-center gap-x-2 cursor-pointer hover:text-blue-200';
    return <>
        <ul className="pt-6 w-full flex flex-col gap-y-4">
            <li onClick={() => navigation("/admin")} className={`${inactiveBar} ${location.pathname === '/admin' && activeBar}`}>
                <Dashboard className="text-primary" />
                <span className={`${!open && "hidden"} text-lg font-semibold origin-left duration-200`}>
                    Dashboard
                </span>
            </li>

            <li onClick={() => navigation("/admin/users")} className={`${inactiveBar} ${location.pathname === '/admin/users' && activeBar}`}>
                <People className="text-primary" />
                <span className={`${!open && "hidden"} text-lg font-semibold origin-left duration-200`}>
                    Users
                </span>
            </li>
            <li onClick={() => navigation("/admin/mining")} className={`${inactiveBar} ${location.pathname === '/admin/mining' && activeBar}`}>
                <ModelTraining className="text-primary" />
                <span className={`${!open && "hidden"} text-lg font-semibold origin-left duration-200`}>
                    Minings
                </span>
            </li>

            <li onClick={() => navigation("/admin/stock")} className={`${inactiveBar} ${location.pathname === '/admin/stock' && activeBar}`}>
                <WorkHistory className="text-primary" />
                <span className={`${!open && "hidden"} text-lg font-semibold origin-left duration-200`}>
                    Stock
                </span>
            </li>


            <li onClick={() => navigation("/admin/incidence")} className={`${inactiveBar} ${location.pathname === '/admin/incidence' && activeBar}`}>
                <EmergencyShare className="text-primary" />
                <span className={`${!open && "hidden"} text-lg font-semibold origin-left duration-200`}>
                    Incidence
                </span>
            </li>
        </ul>
    </>
}