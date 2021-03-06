
import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.scss']
})
export class ContactarComponent implements OnInit {

  correo:any;
  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.correo={email:'',subject:'',text:''}
  }
  enviar(){
    this.correo.text=this.correo.email+" "+this.correo.text;
    this.data.enviarCorreo(this.correo).subscribe(data =>{
      console.log(data);
    });
  }


}
