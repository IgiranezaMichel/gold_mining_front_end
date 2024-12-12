import { Incident } from "../model/incident";
import { Axios } from "../util/axios";
import { PageInput } from "../util/page";

export class IncidentServices{
    public async createIncident(incident:Incident){
        return Axios().post(`/incident/add-incident`,incident); 
    }
    public async IncidentListItems(page:PageInput){
        console.log(page);
        
        return Axios().post(`/incident/find-all`,page); 
    }
    public async deleteIncident(id:PageInput){
        return Axios().delete(`/incident/delete-incident/${id}`); 
    }
}