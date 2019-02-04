import { HttpEventType, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { MultifileService } from './multifile.service';
import { Component, OnInit, Renderer } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-multifile',
  templateUrl: './multifile.component.html',
  styleUrls: ['./multifile.component.css']
})
export class MultifileComponent implements OnInit {
  //public documentGrp: FormGroup
  
  myFiles:string [] = [];
  sMsg:string = '';

 
  
  constructor(
    private renderer: Renderer,
    private formBuilder: FormBuilder,
    private multifilesService:MultifileService,
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
  }

getFileDetails (e) {
 console.log("e ", e);
  console.log (e.target.files);
  for (let i = 0; i < e.target.files.length; i++) { 
    this.myFiles.push(e.target.files[i]);
  }
}

uploadFiles () {
  const frmData = new FormData();
  
  for (let i = 0; i < this.myFiles.length; i++) { 
    frmData.append("file", this.myFiles[i]);
  }
  
  this.httpClient.post('http://192.168.15.161:8000/uploadFile', frmData).subscribe(
    data => {
      // SHOW A MESSAGE RECEIVED FROM THE WEB API.
      this.sMsg = data as string;
      console.log (this.sMsg);
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);    // SHOW ERRORS IF ANY.
    }
    //mial varcha code ghyacha ahe tushar ne send kelela
  );
}
}
