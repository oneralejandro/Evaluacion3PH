import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonThumbnail, IonLabel, IonItem, IonList, IonIcon, IonInput, } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { DestinationsService } from '../Servicios/destinations.service';
import { OTMService } from '../Services/otm.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, cameraOutline, airplane} from 'ionicons/icons';
import { IonicModule} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PrimerModal } from '../Modal/primermodal/primermodal.page';
import { FormsModule } from '@angular/forms';
import { AgregarprecioPage } from '../Modal/agregarprecio/agregarprecio.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterModule, IonButton, IonThumbnail, IonLabel, IonItem, IonList, CommonModule, IonIcon, IonicModule, CommonModule, IonInput, FormsModule],
})
export class HomePage implements OnInit {
  places: any[] = [];
  valor: number[] = [];
  nuevoValor: number | undefined;

  


  constructor(
    private destinationsService: DestinationsService,
    private otmService: OTMService,
    private modalCtrl: ModalController

  ){
    addIcons({airplane,
             cameraOutline,
             trashOutline,
             addCircleOutline})
  }



  async eliminarDestino(destino: any) {
    const modal = await this.modalCtrl.create({
      component: PrimerModal,
      componentProps: { destinoAEliminar: destino }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data && data.confirmado) {
      const index = this.places.indexOf(data.destino);
      if (index > -1) {
        this.places.splice(index, 1);
      }}}

      async agregarValor(place: any) {
        const modal = await this.modalCtrl.create({
          component: AgregarprecioPage,
          componentProps: { place: place }
        });
    
        await modal.present();
    
        const { data } = await modal.onDidDismiss();
        if (data && data.confirmado) {
         
     
          if (data.valor) {
            this.valor.push(data.valor);
          }
        }
      }

      async AgregarPrecio(place: any) {
        const modal = await this.modalCtrl.create({
          component: AgregarprecioPage,
          componentProps: { place: place }
        });
    
        await modal.present();
    
        const { data } = await modal.onDidDismiss();
        if (data && data.confirmado) {
       
         
          place.inputValue = data.valor;
        }
      }



  
      ngOnInit() {
        this.places = this.destinationsService.getAllPlaces();
        
        this.places.forEach(place => {
          if (place.inputValue === undefined) {
            place.inputValue = ''; 
          }
        });
      }
    
      
    }