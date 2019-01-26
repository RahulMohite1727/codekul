import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  checkCredentials,Payment ,Address} from './countryVal';


import { CountryService } from './country.service';
import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-billing-add',
  templateUrl: './billing-add.component.html',
  styleUrls: ['./billing-add.component.css']
})
export class BillingAddComponent implements OnInit {

  

  public checkOutForm: FormGroup
  public countries : any = [];
  public states:any=[];

  result: any;
  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
  ) { }

 

  ngOnInit() {

    
  

    this.checkOutForm = this.formBuilder.group({
      fisrtName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.required],
      addressOne: [null, Validators.required],
      addressTwo: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null, Validators.required],
      shippingAddressIs: [null, Validators.required],
      saveTheInfoForNextTime: [null, Validators.required],
      payment: [null, Validators.required],      
      nameOnCard: [null, Validators.required],
      creditCardNumber: [null, Validators.required],
      exipiration: [null, Validators.required],
      cvv: [null, Validators.required],

    });


    this.countryService.getCountry().subscribe(result => {
      console.log('result',result);
      this.countries=result;
      console.log('this.countries',this.countries);
    })
    this.countryService.getState().subscribe(result=>{
      console.log('result',result);
      this.states=result;
      console.log('this.states',this.states);
    })
    
    

  }
  checkOut(): void {
    let credentials: checkCredentials = {} as checkCredentials
    credentials.address = {} as Address
    credentials.payment = {} as Payment
    
    
    console.log(this.checkOutForm)

    if (!this.checkOutForm.valid) {
      credentials.fisrtName = this.checkOutForm.controls.fisrtName.value;
      credentials.lastName = this.checkOutForm.controls.lastName.value;
      credentials.userName = this.checkOutForm.controls.userName.value;
      credentials.email = this.checkOutForm.controls.email.value;
      
      credentials.address.addressOne = this.checkOutForm.controls.addressOne.value;
      credentials.address.addressTwo = this.checkOutForm.controls.addressTwo.value;  
      credentials.address.country = this.checkOutForm.controls.country.value;
      credentials.address.state = this.checkOutForm.controls.state.value;
      credentials.address.zip = this.checkOutForm.controls.zip.value;
      
      credentials.shippingAddressIs = this.checkOutForm.controls.shippingAddressIs.value;
      credentials.saveTheInfoForNextTime = this.checkOutForm.controls.saveTheInfoForNextTime.value;
      
      credentials.payment.payment = this.checkOutForm.controls.payment.value;
      credentials.payment.payment = this.checkOutForm.controls.payment.value;
      credentials.payment.payment = this.checkOutForm.controls.payment.value;
      credentials.payment.nameOnCard = this.checkOutForm.controls.nameOnCard.value;
      credentials.payment.creditCardNumber = this.checkOutForm.controls.creditCardNumber.value;
      credentials.payment.exipiration = this.checkOutForm.controls.exipiration.value;
      credentials.payment.cvv = this.checkOutForm.controls.cvv.value;
    
      console.log(credentials.payment);
      
      this.countryService.checkUser(credentials).subscribe(response => {
        console.log(response, 'successful')
      })
    }
  }
  // favoriteSeason: string;
  // seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}
