import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, SearchbarInputEventDetail } from '@ionic/angular';
import { IonInput, IonSearchbar, IonThumbnail, IonContent,IonLabel,IonItem, IonList, IonButton, IonToolbar, IonHeader, IonTitle, IonIcon} from '@ionic/angular/standalone';
import { CapacitorHttp } from '@capacitor/core';
import {IonSearchbarCustomEvent} from '@ionic/core';
import { OTMService } from 'src/app/Servicios2/otm.service';
import { DestinationsService } from 'src/app/Servicios/destinations.service';
import { ResultDetail, PreviewWS } from 'src/app/Clases/mapeo';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, cameraOutline, airplane} from 'ionicons/icons';




@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.page.html',
  styleUrls: ['./destinations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonInput, IonSearchbar, IonThumbnail, IonContent,IonLabel, IonItem, IonList, IonButton, IonToolbar,IonHeader, IonTitle, RouterModule, IonIcon]
})




export class DestinationsPage implements OnInit {
  

  
  constructor(
    private destinationsService: DestinationsService,
    private otmService: OTMService,

  ){
    addIcons({airplane,
             cameraOutline,
             trashOutline,
             addCircleOutline})
  }

addPlace(place: any) {
    this.destinationsService.addPlaceToHome(place);
  }


async handleInput(event: any) {
  await this.destinationsService.handleInput(event);
}

get places() {
  return this.destinationsService.places;
}



  ngOnInit() {}

}
