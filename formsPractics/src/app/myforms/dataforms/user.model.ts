export interface UserData {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserDataService{
    id: string 
    first_name: string,
     last_name: string,
     avatar: string
}
export interface Datum {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface credens {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Datum[];
}
