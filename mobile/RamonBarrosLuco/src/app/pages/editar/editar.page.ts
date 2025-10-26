import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonList, IonButtons, 
  IonMenuButton, IonIcon, IonMenu,IonInput } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo-service';
import { HelperService } from 'src/app/services/helper-service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: true,
  imports: [IonButtons, IonList, IonButton, IonItem, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenuButton,IonInput]
})
export class EditarPage implements OnInit {

  modelo:string = '';
  marca:string = '';
  color:string = '';
  patente:string = '';
  imagen:string = '';

  PATENTE:string = "";

  private route = inject(ActivatedRoute);
  private vehiculoService = inject(VehiculoService);
  private router = inject(Router);
  private helper = inject(HelperService);

  constructor() { }

  ngOnInit() {
    this.PATENTE = this.route.snapshot.paramMap.get('patente') ?? '';
    this.cargarVehiculo();
  }

  async cargarVehiculo(){
    const req = await this.vehiculoService.buscarVehiculo(this.PATENTE);
    this.marca = req.data[0].marca;
    this.color = req.data[0].color;
    this.patente = req.data[0].patente;
    this.imagen = req.data[0].imagen;
    this.modelo = req.data[0].modelo;

    
  }

  async editar(){
    const req = await this.vehiculoService.editarVehiculo({
      color:this.color,
      imagen:this.imagen,
      marca:this.marca,
      modelo:this.modelo,
      patente:this.patente
    });
    this.router.navigateByUrl("inicio");
    this.helper.showAlert("Vehiculo actualizado correctamente!!!!","Informacion")
  }





}
