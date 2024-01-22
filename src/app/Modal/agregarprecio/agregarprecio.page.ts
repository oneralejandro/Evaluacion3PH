import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonButton, IonLabel, IonInput, IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-agregarprecio',
  templateUrl: './agregarprecio.page.html',
  styleUrls: ['./agregarprecio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButton, IonInput, IonInput, IonContent, IonHeader, IonToolbar]
})
export class AgregarprecioPage implements OnInit {
  @Input() place: any;
  valorTemporal: number | undefined;

  constructor(private modalCtrl: ModalController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true, valor: this.valorTemporal });
  }
  

  cerrar() {
    this.modalCtrl.dismiss();
  }
}

