import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgressBar';

//   prg : number = 0
//   prgStr : string
  
// @Input()



// @Output()
//   onBtn: EventEmitter<number> = new EventEmitter()

// forBtn(btn: number) {
//   this.onBtn.emit(btn)
// }
// onBtnClicked(btn : number) {
//   if(btn === 1) {
//     this.prgStr = `${this.prg++}%`
//     console.log(this.prgStr)
//   }
//   if(btn === 2) {
//     this.prgStr = `${--this.prg}%`
//     console.log(this.prgStr)
//   }
// }
nm:number=0
nmPer:any
ClickMe(nm){
  if(nm===1){
    this.nm+=10
    this.nmPer=`${this.nm}%`
    console.log(this.nmPer)
  }
  else{
    this.nm-=10
    this.nmPer=`${this.nm}%`
    console.log(this.nmPer)
  }
}


}