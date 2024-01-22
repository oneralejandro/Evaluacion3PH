import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, Photo, CameraResultType } from '@capacitor/camera';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButton]
})
export class CameraPage implements OnInit {

  photo:Photo|null = null

  constructor() { }


  async takePhoto(){
    this.photo = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      correctOrientation: true
    })
  }


  ngOnInit() {
  }

}
