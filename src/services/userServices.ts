import { Role } from "../constants/enums/role";
import { USER_STATUS } from "../constants/enums/userStatus";
import { User } from "../model/user";
import { Axios } from "../util/axios";
import { PageInput } from "../util/page";

export class UserService {
    public async resetUserPassword(id: string) {
        return Axios().get(`/user/reset-password/${id}`)
    }
public async createUser(user:User) {
    const response=Axios().post(`/user/create-account`,user)
    return response;
}
 public async getUserListByRole(page:PageInput,role:Role,status:USER_STATUS) {
     const response=Axios().post(`/user/find-all/user/role?role=${role}&status=${status}}`,page)
     return response;
 }
 public async getUserList(page:PageInput,status:USER_STATUS) {
    const response=Axios().post(`/user/find-all/user?status=${status}`,page)
    return response;
}
 public async deleteAccount(id:string) {
     const response=Axios().delete(`/user/delete-account/${id}`)
     return response;
 }
 public async getUserPrincipleDetail(){
     return Axios().get(`/user/get/principle-detail`)
 }
 public async countByRole(role:Role){
    return Axios().get(`/user/count/by/${role}`)
}
public async countUsers(){
    return Axios().get(`/user/count/size`)
}
 public async login(username:string,password:string){
    return Axios().post(`http://localhost:8080/login?username=${username}&password=${password}`,{},{withCredentials:true});
}
}