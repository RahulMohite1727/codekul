import { StateserviceService } from './stateservice.service';
import { FormsubmitService } from './formsubmit.service';
import { CountryService } from './country.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Checkpjo, Address, Payment } from './checkboc.model';
import { Counpjo } from './country';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  public checkoutForm: FormGroup;
  public countryList: Array<Object>;
  public stateList: Array<Object>;
  

  constructor(private countryService: CountryService,
    private formsubmitService: FormsubmitService,
    private formBuilder: FormBuilder,
    private stateserviceService:StateserviceService) { }


  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
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
    this.countryService.getCountry().subscribe((res: Array<Object>) => {
      console.log('rse', res);
      this.countryList = res;
      console.log('this.countryList',this.countryList);

    });
   







  }

  state(id):void{
    this.stateserviceService.getState().subscribe((res:Array<Object>)=>{
      console.log('rew0',res);
      this.stateList = res;
      console.log('this.stateList',this.stateList);
      
    });


  }
  submit(): void {
    const cred: Checkpjo = {} as Checkpjo
    let crede: Address ={} as Address
    let creden: Payment = {} as Payment
    console.log(this.checkoutForm)
    if (this.checkoutForm.valid) {

      cred.fisrtName = this.checkoutForm.controls.fisrtName.value;
      cred.lastName = this.checkoutForm.controls.lastName.value;
      cred.userName = this.checkoutForm.controls.userName.value;
      cred.email = this.checkoutForm.controls.email.value;
      crede.addressOne = this.checkoutForm.controls.addressOne.value;
      crede.addressTwo = this.checkoutForm.controls.addressTwo.value;
      crede.country = this.checkoutForm.controls.country.value;
      crede.state = this.checkoutForm.controls.state.value;
      crede.zip = this.checkoutForm.controls.zip.value;
      crede.shippingAddressIs = this.checkoutForm.controls.shippingAddressIs.value;
      crede.saveTheInfoForNextTime = this.checkoutForm.controls.saveTheInfoForNextTime.value;
      creden.payment = this.checkoutForm.controls.payment.value;
      creden.payment = this.checkoutForm.controls.payment.value;
      creden.payment = this.checkoutForm.controls.payment.value;
      creden.nameOnCard = this.checkoutForm.controls.nameOnCard.value;
      creden.creditCardNumber = this.checkoutForm.controls.creditCardNumber.value;
      creden.exipiration = this.checkoutForm.controls.exipiration.value;
      creden.cvv = this.checkoutForm.controls.cvv.value;


      this.formsubmitService.formSubmit(cred).subscribe(res => {
        if (res) {
          console.log(res, 'succesful');

        }
      });
    }

  }























}
