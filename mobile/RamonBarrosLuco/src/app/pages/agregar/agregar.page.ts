import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonList, IonButtons, IonMenuButton, IonIcon, IonMenu } from '@ionic/angular/standalone';
import { AgregarAuto } from 'src/app/models/agregarAuto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonList, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenuButton, IonMenu]
})
export class AgregarPage implements OnInit {

   modelo = '';
  marca = '';
  color = '';
  patente = '';
  imagen = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }


    guardar() {
    const nuevoAuto: AgregarAuto = {
      modelo: this.modelo,
      marca: this.marca,
      color: this.color,
      patente: this.patente,
      imagen: this.imagen
    };

    console.log('Nuevo vehículo:', nuevoAuto);
  }

  volver() {
    this.router.navigateByUrl('/inicio');
  }

}
