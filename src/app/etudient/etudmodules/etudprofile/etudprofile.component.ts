import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudprofile',
  templateUrl: './etudprofile.component.html',
  styleUrls: ['./etudprofile.component.css']
})
export class EtudprofileComponent implements OnInit {
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
