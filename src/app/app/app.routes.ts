import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tourist-destination',
    loadComponent: () => import('./tourist-destination-page/tourist-destination/tourist-destination.page').then( m => m.TouristDestinationPage)
  },
  {
    path: 'destinations',
    loadComponent: () => import('./API/destinations/destinations.page').then( m => m.DestinationsPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./Camera/camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'primermodal',
    loadComponent: () => import('./Modal/primermodal/primermodal.page').then( m => m.PrimerModal)
  },
  {
    path: 'agregarprecio',
    loadComponent: () => import('./Modal/agregarprecio/agregarprecio.page').then( m => m.AgregarprecioPage)
  },
  

];
