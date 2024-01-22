import { Injectable } from '@angular/core';
import { OTMService } from '../Services/otm.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  places: any[] = [];

  predefinedPlaces: any[] = [
    { name: 'Concepcion', image: 'https://images.pexels.com/photos/2475407/pexels-photo-2475407.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { name: 'Concepcion', image: 'https://images.pexels.com/photos/910564/pexels-photo-910564.png?auto=compress&cs=tinysrgb&w=1200' },
  ];

  private searchedPlaces: any[] = [];
  

  constructor(
    private service: OTMService
  ) { }


  //borrar elemento del arreglo con icono del tacho de basura
  deletePlaceFromHome(place: any) {
    const index = this.predefinedPlaces.indexOf(place);
    if (index > -1) {
      this.predefinedPlaces.splice(index, 1);
    }}

  getPredefinedPlaces() {
    return this.predefinedPlaces;
  }

  getSearchedPlaces() {
    return this.searchedPlaces;
  }

  addSearchedPlace(place: any) {
    this.searchedPlaces.push(place);
  }

  getAllPlaces() {
    return [...this.predefinedPlaces, ...this.searchedPlaces];
  }

  //agregar elementos al arreglo del home

  addPlaceToHome(place: any) {
    console.log("Añadiendo lugar:", place);
    this.predefinedPlaces.push(place);
  }

  
  

  async handleInput($event: any) {
    const term = $event.detail.value;
    const searchResults = await this.service.searchPlace(term);
    this.searchedPlaces = [];

    
    
  
    this.places = [];
  
    for (const feature of searchResults.features) {
      const placeDetails = await this.service.searchSource(feature.properties.xid);
  
      this.places.push({
        name: feature.properties.name,
        image: placeDetails.preview?.source
      });
    }
  }

  

}
