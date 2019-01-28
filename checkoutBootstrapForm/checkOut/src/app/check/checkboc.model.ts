
    export interface Checkpjo {
        fisrtName: string;
        lastName: string;
        userName: string;
        email: string;
        
       
       
    
    }
    export interface Address{
    addressOne: string;
    addressTwo: string;
    country: string;
    state: string;
    zip: string;
    shippingAddressIs: boolean;
    saveTheInfoForNextTime:boolean;
}
export interface Payment{
    payment: string;
    nameOnCard: string;
    creditCardNumber: string;
    exipiration: string;
    cvv: string;
}