import { KeyboardArrowRight, NotificationsActive, ReportGmailerrorred } from "@mui/icons-material"


const Navbar = () => {
    return (
        <div>
            <div className='py-2 px-6 bg-white flex justify-between items-center shadow-md shadow-black/20 sticky top-0 left-0'>
                <div className='text-slate-600 font-bold text-sm cursor-pointer flex justify-center items-center'>
                    <a href='/admin-dashboard'>Dashboard</a> <KeyboardArrowRight/> 
                </div>
                <div className='text-slate-700 flex justify-center items-center gap-2'>
                    <NotificationsActive   className='cursor-pointer' />
                    <div className='flex justify-center items-center gap-1 cursor-pointer'>
                        <ReportGmailerrorred/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
