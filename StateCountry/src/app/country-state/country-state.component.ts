import { FormGroup ,FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent implements OnInit {
  createAccountForm: FormGroup;
  countries: {};
  states: {};
  cities: {};
  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      data => this.countries = data
    );

    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.countryService.getStates(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.countryService.getCities(stateId).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }

  }


