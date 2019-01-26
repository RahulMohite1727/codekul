import { HttpEventType } from '@angular/common/http';
import { MultifileService } from './multifile.service';
import { Component, OnInit, Renderer } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-multifile',
  templateUrl: './multifile.component.html',
  styleUrls: ['./multifile.component.css']
})
export class MultifileComponent implements OnInit {
  public documentGrp: FormGroup
  
  selectedFile: File=null;
  // public totalfiles: Array<File> =[];
  // public totalFileName = [];
  // public lengthCheckToaddMore =0;
  
  constructor(
    private renderer: Renderer,
    private formBuilder: FormBuilder,
    private multifilesService:MultifileService
  ) { }

  ngOnInit() {
    // this.documentGrp = this.formBuilder.group({
    //   doc_name: '',
    //   doc_description: '',
    //   documentFile:new FormControl(File),
    //   items: this.formBuilder.array([this.createUploadDocuments()])
    // });

  // }
  // createUploadDocuments(): FormGroup {
  //   return this.formBuilder.group({
  //     doc_name: '',
  //     doc_description: '',
  //     documentFile : File
  //   });
  // }

  // get items(): FormArray {
  //   return this.documentGrp.get('items') as FormArray;
  // };

  // addItem(): void {


//console.log("length is ",this.totalfiles.length);
//console.log("lengthCheckToaddMore ", this.lengthCheckToaddMore);

// if(this.totalfiles.length!=0)
// if( this.items.value[0].doc_name != "" && this.items.value[0].doc_description != "" && ((this.lengthCheckToaddMore) === (this.totalfiles.length)) )
// {

//     this.items.insert(0, this.createUploadDocuments())
//      this.lengthCheckToaddMore=this.lengthCheckToaddMore+1;
// }
//   }

//   removeItem(index: number) {

//    this.totalfiles.splice(index);
//    this.totalFileName.splice(index);
//     this.items.removeAt(index);
//     this.lengthCheckToaddMore=this.lengthCheckToaddMore-1;
//    // console.log("name are ",this.totalFileName);

//   }

//   public fileSelectionEvent(fileInput: any,oldIndex) {

//     //console.log("oldIndex is ", oldIndex);

//     if (fileInput.target.files && fileInput.target.files[0]) {
//       var reader = new FileReader();
//       reader.onload = (event: any) => {
//       }
//       if(oldIndex==0)
//     {
//       this.totalfiles.unshift((fileInput.target.files[0]))
//       this.totalFileName.unshift(fileInput.target.files[0].name)
//     }
//     else
//     {
//       this.totalfiles[oldIndex]=(fileInput.target.files[0]);
//       this.totalFileName[oldIndex]=fileInput.target.files[0].name
//     }

//       reader.readAsDataURL(fileInput.target.files[0]);
//     }

//     if(this.totalfiles.length == 1)
//     {
//       this.lengthCheckToaddMore=1;
//     }

//   }




//   public OnSubmit(formValue: any) {


//     let main_form: FormData = new FormData();

//     for(let j=0;j<this.totalfiles.length; j++)
//     {
//       console.log("the values is ",<File>this.totalfiles[j]);
//       console.log("the name is ",this.totalFileName[j]);

//       main_form.append(this.totalFileName[j],<File>this.totalfiles[j])
//     }
//     console.log(formValue.items)



//     //reverseFileNames=this.totalFileName.reverse();

//     let AllFilesObj= []

//     formValue.items.forEach((element, index) => { 

//       console.log("index is ",index);
//       console.log("element is ", element);

//       let eachObj=
//       {
//         'doc_name' : element.doc_name,
//         'doc_description' : element.doc_description,
//         'file_name' : this.totalFileName[index]
//       }
//       AllFilesObj.push(eachObj); 
//     });

//     //console.log("the Array data is ",AllFilesObj);
//     main_form.append("fileInfo",JSON.stringify(AllFilesObj))

//     this.multifilesService.saveFiles(main_form).subscribe(data => {
//       console.log("result is ", data)
//     })

  }
  onfileSelected(event){
 console.log("event ", event);
 this.selectedFile = <File> event.target.files[0];
  }
  onUpload(){
    const fd =new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.multifilesService.upload(fd).subscribe(event=>{
 
 if(event.type === HttpEventType.UploadProgress){

 console.log("UploadProgress: "+ Math.round(event.loaded / event.total*100));

 }
 else if (event.type === HttpEventType.Response){
  console.log("event ", event);
 }
 

    });
  
  }
}
