import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-dyanmic-row-add-delete',
  templateUrl: './dyanmic-row-add-delete.component.html',
  styleUrls: ['./dyanmic-row-add-delete.component.css']
})
export class DyanmicRowAddDeleteComponent implements OnInit {

  public rowAddDel : FormGroup;
  public totalRow:number
  public makes: any = [];
  public models: any = [];
  public hPs: any = [];
  public yearofPurchases: any = [];
  public pTOSpeeds: any = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
     this.dynamicRow();
  }
  dynamicRow(){
    this.rowAddDel = this.fb.group({
      itemRows:this.fb.array([this.initItemRow()])
    })
   
  }
  initItemRow(){
    return this.fb.group({
      make:[''],
      hp:[''],
      model:[''],
      yearOfPurchase:[''],
      ptoSpeed:['']
    });
  }
  addNewRow(){
    
   const control= <FormArray>this.rowAddDel.get(['itemRows']);
 console.log("control ", control);
    control.push(this.initItemRow());
  }
  deletRow(index: number){
    const control = <FormArray>this.rowAddDel.controls['itemRows'];
    if(control != null) {
      this.totalRow= control.value.length;
    }
    if(this.totalRow>1) {
      control.removeAt(index);
    }else{
      alert('one record is mandatory');
      return false;
    }
  }


}
