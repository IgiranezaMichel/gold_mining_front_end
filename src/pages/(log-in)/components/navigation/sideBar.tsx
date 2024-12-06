import { KeyboardArrowRight } from "@mui/icons-material";
import { ReactNode, useState } from "react";
const SideBar = (prop:{children:ReactNode}) => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex bg-blue-950">
            <div className={` ${open ? "w-72" : "w-20"} bg-dark-purple h-screen p-5  pt-8 relative duration-300`} >
                <KeyboardArrowRight onClick={() => setOpen(!open)} className={`absolute bg-white cursor-pointer -right-3 top-9 w-7 z-10 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}/>
                <div className="flex gap-x-4 items-center">
                    <img
                        src={'../../kmine1.png'}
                        className={`w-10 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                        alt="logo"
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Kigali Gold
                    </h1>
                </div>
                     {prop.children}
            </div>

        </div >
    );
};
export default SideBar;

