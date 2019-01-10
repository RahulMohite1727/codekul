
export interface checkCredentials{
    

    fisrtName:string
      lastName:string
      userName:string
      email:string
      shippingAddressIs:string
      saveTheInfoForNextTime:string
        address: Address
        payment:Payment
}
export interface Address{
    addressOne:string
      addressTwo:string
      country:string
      state:string
      zip:string
     
}
export interface Payment{
    payment:string
      
      
    nameOnCard:string
    creditCardNumber:string
    exipiration:string
    cvv:string
}


