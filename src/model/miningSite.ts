import { MiningSiteStatus } from "../constants/enums/miningSiteStatus";

export type MiningSite = {
    id:string;
    name: string;
    address: string;
    status: MiningSiteStatus; 

}