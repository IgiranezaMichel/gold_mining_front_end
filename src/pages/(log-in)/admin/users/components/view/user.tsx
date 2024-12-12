/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email, LockPerson, People, Person, PhoneAndroid, Search, Sort } from "@mui/icons-material"
import { Avatar, MenuItem, Pagination, Select, SelectChangeEvent, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { PageInput } from "../../../../../../util/page"
import { UserService } from "../../../../../../services/userServices"
import { USER_STATUS } from "../../../../../../constants/enums/userStatus"
import { ResetUser } from "../action/reset"
import { UserDetail } from "../action/detail"

export const ViewUserUI = () => {
    const [page, setPage] = useState<PageInput>({
        pageNumber: 0,
        pageSize: 10,
        search: "",
        sortBy: 'id'
    })
    const handleChange = (event: any, value: any) => {
        console.log(event);
        setPage({
            ...page, pageNumber: value - 1
        });
    };
    const [users, setUsers] = useState<any>([])
    const [status, setStatus] = useState(USER_STATUS.ACTIVE)
    useEffect(() => {
        new UserService().getUserList(page, status)
            .then(res => {
                setUsers(res.data)
            }
            ).catch(err => {
                console.error(err)
            }
            )
    }, [page, status])
    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as USER_STATUS);
    };
    return <>
        
        <main className="">
       
           <div className="border p-2 rounded-md flex flex-col my-3 border-black">
           <div className="font-bold text-center">
            <People /> Users
        </div>
           <section className="mb-1 flex justify-between items-center">
                <div>
                    <TextField placeholder="search ..." value={page.search} onChange={e => setPage({ ...page, search: e.target.value })} InputProps={{ endAdornment: <Search /> }} />
                </div>
                <div>
                    <Select onChange={handleStatusChange} IconComponent = {Person}>
                        <MenuItem value={USER_STATUS.ACTIVE}>Active</MenuItem>
                        <MenuItem value={USER_STATUS.INACTIVE}>Inactive</MenuItem>
                        <MenuItem value={USER_STATUS.LEAVE}>Leave</MenuItem>
                    </Select>
                    <Select onChange={e=>setPage({...page, sortBy: e.target.value as string})} IconComponent = {Sort}>
                        <MenuItem value={'name'}>Name</MenuItem>
                        <MenuItem value={'gender'}>Gender</MenuItem>
                        <MenuItem value={'timeStamp'}>Date</MenuItem>
                    </Select>
                </div>
            </section>
           </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase  bg-blue-950 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created at
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Access role
                            </th>
                           
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users != undefined && users.data != undefined && users.data.length != 0 && users.data.map((item: any) => <tr key={item.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex  gap-y-2">
                                    <Avatar src={item.picture} className="h-10 w-10 rounded-full mr-1" alt="user" />
                                    <div>
                                        <div>{item.name}</div>
                                        <div>{item.gender}</div>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div><PhoneAndroid className="text-sm pr-2" />{item.phoneNumber}</div>
                                <div><Email className="text-sm pr-2" />{item.email}</div>
                            </td>
                            <td className="px-6 py-4">
                                {item.timeStamp}
                            </td>
                            <td className="px-6 py-4">
                               <LockPerson className="text-sm"/> {item.role.split("_")[1].toLowerCase()}
                            </td>
                            <td >
                                <div className="flex justify-center items-center gap-5">
                                    <ResetUser user={item} />
                                    <UserDetail user={item} />
                                </div>
                            </td>
                        </tr>)}
                        <tr>
                            {users != undefined && users.data != undefined && users.data.length == 0 && <td colSpan={6} className="text-center">No data found</td>}
                        </tr>
                    </tbody>
                </table>
                {users != undefined && users.data != undefined && users.data.length > 0 &&
                    <td colSpan={5} className="text-center flex justify-between items-center p-2">
                        <div>
                            Page {users.pageNumber + 1} of {users.pageSize}
                            <select onChange={e => setPage({ ...page, pageSize: Number(e.target.value) })} name="" id="">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <Stack spacing={2}>
                            <Pagination
                                count={users.pageSize}
                                page={users.pageNumber}
                                onChange={handleChange}
                                color="primary"
                                size="small"
                                variant="outlined"
                            />
                        </Stack>
                    </td>}
            </div>
        </main>
    </>
}