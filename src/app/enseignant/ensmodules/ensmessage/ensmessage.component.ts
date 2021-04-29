import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensmessage',
  templateUrl: './ensmessage.component.html',
  styleUrls: ['./ensmessage.component.css']
})
export class EnsmessageComponent implements OnInit {

  ngOnInit(): void {
  }
  urllink = './assets/image/form.txt';
  selectFiles(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }
}
