import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { countryVal, checkCredentials } from './countryVal';

import { CountryService } from './country.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-billing-add',
  templateUrl: './billing-add.component.html',
  styleUrls: ['./billing-add.component.css']
})
export class BillingAddComponent implements OnInit {
  public countryVal: countryVal[]
  public cacheCountry: countryVal[];
  public checkOutForm: FormGroup

  result: any;
  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.checkOutForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.required],
      addressOne: [null, Validators.required],
      addressTwo: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null, Validators.required],
      sameAddress: [null, Validators.required],
      saveInfo: [null, Validators.required],
      paymentMethod: [null, Validators.required],
      
      ccName: [null, Validators.required],
      ccNumber: [null, Validators.required],
      ccExpiration: [null, Validators.required],
      ccCvv: [null, Validators.required],

    });


    this.countryService.getCountry().subscribe(result => {
      this.countryVal = this.result

      console.log(result)
    })
    //  selectCountry(filterVal: any){
    //   if(filterVal == '0')
    //   this.countryVal = this.cacheCountry;
    //   else
    //   this.countryVal = this.cacheCountry.filter((item)=>item.country == filterVal)
    // }

  }
  checkOut(): void {
    const credentials: checkCredentials = {} as checkCredentials
    console.log(this.checkOutForm)

    if (this.checkOutForm.valid) {
      credentials.firstName = this.checkOutForm.controls.firstName.value;
      credentials.lastName = this.checkOutForm.controls.lastName.value;
      credentials.userName = this.checkOutForm.controls.userName.value;
      credentials.email = this.checkOutForm.controls.email.value;
      credentials.addressOne = this.checkOutForm.controls.addressOne.value;
      credentials.addressTwo = this.checkOutForm.controls.addressTwo.value;
      credentials.country = this.checkOutForm.controls.country.value;
      credentials.state = this.checkOutForm.controls.state.value;
      credentials.zip = this.checkOutForm.controls.zip.value;
      credentials.sameAddress = this.checkOutForm.controls.sameAddress.value;
      credentials.saveInfo = this.checkOutForm.controls.saveInfo.value;
      credentials.paymentMethod = this.checkOutForm.controls.paymentMethod.value;
      credentials.paymentMethod = this.checkOutForm.controls.paymentMethod.value;
      credentials.paymentMethod = this.checkOutForm.controls.paymentMethod.value;
      credentials.ccName = this.checkOutForm.controls.ccName.value;
      credentials.ccNumber = this.checkOutForm.controls.ccNumber.value;
      credentials.ccExpiration = this.checkOutForm.controls.ccExpiration.value;
      credentials.ccCvv = this.checkOutForm.controls.ccCvv.value;

      this.countryService.checkUser(credentials).subscribe(response => {
        console.log(response, 'successful')
      })
    }
  }





}
