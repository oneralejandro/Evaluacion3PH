import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tourist-destination',
  templateUrl: './tourist-destination.page.html',
  styleUrls: ['./tourist-destination.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TouristDestinationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
