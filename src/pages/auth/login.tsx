/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { UserService } from "../../services/userServices";
import { TextField } from "@mui/material";
import { Email, LockPerson, Password } from "@mui/icons-material";
import { toast, Toaster } from "sonner";

const Login = (prop: { children: ReactNode }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    }
    )
    const submitForm = (e:any) => {
        e.preventDefault();
        new UserService().login(user.email, user.password).then((res) => {
            toast.success(res.data)
        }).catch((err) => {
           toast.error(err.response.data)
        })
    }
    return (
        <div className="grid grid-cols-2 w-screen items-center justify-center h-screen">
            <div className="bg-black flex flex-col h-screen w-screen items-center justify-center">
                <img src={'../../../mine.jpg'} alt="login" className="m-auto" />
            </div>
            <section  className="relative overflow-auto h-screen flex  bg-white">
                {/* Form Content */}
                <div className="relative bg-white  p-8 rounded-lg  max-w-md m-auto w-full z-10">
                    <div className="text-center">
                    <LockPerson sx={{fontSize: 100}}/>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    {/* Form Fields */}
                    <form onSubmit={submitForm} className='flex flex-col gap-y-4'>
                        <TextField InputProps={{ endAdornment: <Email /> }} value={user.email} 
                        onChange={(e) => setUser({ ...user, email: e.target.value })} 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter your name" required />
                   
                        <TextField  InputProps={{ endAdornment: <Password /> }} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        type="password" placeholder="Enter your password" required/>

                        <button
                            type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </section>
            <div className="top-0 fixed">
                {prop.children}
            </div>
            <Toaster/>
        </div>
    );
};
export default Login;
