import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servivios/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  miPortfolio:any;

  constructor(private datosPortfolio:ServiceService){

  }

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
