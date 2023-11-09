import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje : string = "";
  constructor(private rutaActiva : ActivatedRoute, private storage: Storage) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['rutUsuario'])
      {
        this.mensaje = params['rutUsuario'];
      }

   })
   
   }
  ngOnInit() {
  }

  async verStorage()
  {
    let nombre = await this.storage.get("nombreUsuario");
    console.log(" El nombre guardado es: "+nombre);

    

    
  }

}
