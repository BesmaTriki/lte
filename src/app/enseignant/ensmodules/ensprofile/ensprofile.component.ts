import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensprofile',
  templateUrl: './ensprofile.component.html',
  styleUrls: ['./ensprofile.component.css']
})
export class EnsprofileComponent implements OnInit {

  urllink = './assets/img/medecin.jpg';
  image;
  constructor() { }

  ngOnInit(): void {
  }
  selectFiles(event){
    if(event.target.files){
      this.image = event.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }
}
