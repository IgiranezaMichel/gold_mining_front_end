import { BarChart, People } from "@mui/icons-material"
import { AdminMenu } from "../../../../util/menu/admin"
import UserNavigationBar from "../../components/navigation"
import { Card } from "@mui/material"
import { useEffect, useState } from "react"
import { UserService } from "../../../../services/userServices"
import { Role } from "../../../../constants/enums/role"
import { ViewUserUI } from "./components/view/user"

export const AdminManageUserUI = () => {
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalMiner, setTotalMiner] = useState(0)
    const [totalClient, setTotalClient] = useState(0)
    const [totalAdmin, setTotalAdmin] = useState(0)
    useEffect(() => {
        new UserService().countUsers().then(
            data => setTotalUsers(data.data)
        ).catch(err => console.log(err))
        new UserService().countByRole(Role.ROLE_ADMIN).then(
            data => setTotalAdmin(data.data)
        ).catch(err => console.log(err))
        new UserService().countByRole(Role.ROLE_CLIENT).then(
            data => setTotalClient(data.data)
        ).catch(err => console.log(err))
        new UserService().countByRole(Role.ROLE_MINER).then(
            data => setTotalMiner(data.data)
        ).catch(err => console.log(err))
    }, [])
    return <>
        <UserNavigationBar menu={<AdminMenu />}>
            <div className="p-3">
                <div className="flex gap-4">
                    <Card className="flex items-center justify-between p-4 gap-2 bg-yellow-600">
                        <People />
                        <div>
                            <h1 className="text-lg font-bold">{totalUsers}</h1>
                            <p className="text-sm text-gray-500">Total Users</p>
                        </div>
                    </Card>
                    <Card className="flex items-center justify-between p-4 gap-2">
                        <BarChart />
                        <div>
                            <h1 className="text-lg font-bold">{totalAdmin}</h1>
                            <p className="text-sm text-gray-500">Total admin</p>
                        </div>
                    </Card>
                    <Card className="flex items-center justify-between p-4 gap-2">
                        <BarChart />
                        <div>
                            <h1 className="text-lg font-bold">{totalMiner}</h1>
                            <p className="text-sm text-gray-500">Total miners</p>
                        </div>
                    </Card>
                    <Card className="flex items-center justify-between p-4 gap-2">
                        <BarChart />
                        <div>
                            <h1 className="text-lg font-bold">{totalClient}</h1>
                            <p className="text-sm text-gray-500">Total client</p>
                        </div>
                    </Card>
                </div>
                <ViewUserUI/>
            </div>
        </UserNavigationBar>
    </>
}