/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { User } from "../../model/user";
import { USER_STATUS } from "../../constants/enums/userStatus";
import { Role } from "../../constants/enums/role";
import { UserService } from "../../services/userServices";
import { Avatar, Checkbox, TextField } from "@mui/material";
import { Email, Image, LockPerson, Man, Password, Person, PhoneAndroid, Woman } from "@mui/icons-material";
import { toast, Toaster } from "sonner";

const SignUp = (prop: { children: ReactNode }) => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
        phoneNumber: '',
        base64Image: '',
        gender: '',
        id: '',
        role: Role.ROLE_CLIENT,
        status: USER_STATUS.ACTIVE
    }
    )
    const submitForm = (e:any) => {
        e.preventDefault();
        new UserService().createUser(user).then((res) => {
            toast.success(res.data)
        }).catch((err) => {
           toast.error(err.response.data)
        })
    }
    const handleImageUpload = (event:any) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
              reader.onload = () => {
            const base64String = reader.result as string;
            setUser({...user,base64Image:base64String }); 
          };
    
          reader.readAsDataURL(file);
        }
      };
    
    return (
        <div className="grid grid-cols-2 w-screen items-center justify-center h-screen">
            <div>
                <Avatar sx={{width: 500, height: 500}} src={user.base64Image.length!=0 ? user.base64Image : '../../../mine.jpg'} alt="login" className="m-auto" />
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
                        <TextField InputProps={{ endAdornment: <Person /> }} value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter your name" required />
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                            <div className="flex items-center gap-3">
                                <div>
                                    <Checkbox checked={user.gender === "Male" ? true : false} value="Male" icon={<Man />} onChange={(e) => setUser({ ...user, gender: e.target.value })} className="mr-2" name="gender" /> Male
                                </div>
                                <div>
                                    <Checkbox checked={user.gender === "Female" ? true : false} value="Female" icon={<Woman />} onChange={(e) => setUser({ ...user, gender: e.target.value })} className="mr-2" name="gender" /> Female
                                </div>
                            </div>
                        </div>
                        <TextField InputProps={{ endAdornment: <PhoneAndroid /> }} value={user.phoneNumber} onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter your phone number" required/>
                        <TextField InputProps={{ endAdornment: <Email /> }} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter your email" required/>
                        <TextField InputProps={{ endAdornment: <Image /> }}  onChange={handleImageUpload} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="file"
                         InputLabelProps={{shrink:true}}  label="Upload your Profile Picture" />

                        <TextField  InputProps={{ endAdornment: <Password /> }} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="password" placeholder="Enter your password" required/>
                        <TextField  InputProps={{ endAdornment: <Password /> }}  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" type="password" placeholder="Enter your Password" />

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
export default SignUp;
