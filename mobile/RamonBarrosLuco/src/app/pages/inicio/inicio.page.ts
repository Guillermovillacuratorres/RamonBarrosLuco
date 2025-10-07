import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons,IonMenu,IonMenuButton, IonIcon, IonItem, 
  IonLabel, IonList, IonCard, IonCardContent, IonCardHeader,
  IonCardSubtitle, IonCardTitle,
  IonCol, IonGrid, IonRow 
 } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, airplane, bluetooth, call, homeOutline, peopleOutline, wifi } from 'ionicons/icons';
import { Auto } from 'src/app/models/auto';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule,
    IonButtons,IonMenu, IonMenuButton,
    IonIcon, IonItem, IonLabel, IonList,
    IonCard, IonCardContent, IonCardHeader, 
    IonCardSubtitle, IonCardTitle,
    IonCol, IonGrid, IonRow 
  
  ]
})
export class InicioPage implements OnInit {

  private router = inject(Router);

  autos:Auto[] = [
    {id: 1, marca:"Subaru", imagen:"assets/img/subaru.jpg",modelo:"Impreza"},
    {id: 2, marca:"Honda", imagen:"assets/img/civic.jpg",modelo:"Civic"},
    {id: 3, marca:"Nissan", imagen:"assets/img/v16.jpg",modelo:"V16"},
  ]

  constructor() {
    addIcons({ airplane, bluetooth, call, wifi,addCircleOutline,peopleOutline,homeOutline });
   }

  ngOnInit() {
  }

}
