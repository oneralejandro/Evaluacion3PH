import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonModal} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Router } from '@angular/router';
import { OTMService } from 'src/app/Servicios2/otm.service';




@Component({
  selector: 'app-primermodal',
  templateUrl: './primermodal.page.html',
  styleUrls: ['./primermodal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrimerModal implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() destinoAEliminar: any; 

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  confirmarEliminacion() {
    this.modalCtrl.dismiss({ confirmado: true, destino: this.destinoAEliminar });
  }

  cerrarModal() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}