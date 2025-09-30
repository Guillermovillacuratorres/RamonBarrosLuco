import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, 
          IonToolbar,IonImg,IonInput,IonList, IonItem, IonIcon,IonButton,
        IonInputPasswordToggle } from '@ionic/angular/standalone';


        
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent,
            IonHeader,
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule,
            IonImg,
            IonInput,
            IonList, 
            IonItem, 
            IonIcon,
            IonButton,
            IonInputPasswordToggle ]
})
export class LoginPage implements OnInit {

  constructor() { 
    addIcons({ eye, lockClosed });
  }

  ngOnInit() {
  }

}
