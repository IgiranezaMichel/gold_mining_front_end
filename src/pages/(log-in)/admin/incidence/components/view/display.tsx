export const DisplayIncidence = () => {
return <>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase  bg-blue-950 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created by
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Created at
                            </th>
                           
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                 
                </table>
                {/* {users != undefined && users.data != undefined && users.data.length > 0 &&
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
                    </td>} */}
            </div>
</>}