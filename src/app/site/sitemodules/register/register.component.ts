import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  urllink = './assets/image/medecin.jpg';
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
