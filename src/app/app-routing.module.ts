import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  // { path: 'discover', loadChildren: './places/discover/discover.module#DiscoverPageModule' },
  // { path: 'offers', loadChildren: './places/offers/offers.module#OffersPageModule' },
  // { path: 'new-offers', loadChildren: './places/offers/new-offers/new-offers.module#NewOffersPageModule' },
  // { path: 'edit-offer', loadChildren: './places/offers/edit-offer/edit-offer.module#EditOfferPageModule' },
  // { path: 'place-detail', loadChildren: './places/discover/place-detail/place-detail.module#PlaceDetailPageModule' },
  // { path: 'offer-bookings', loadChildren: './places/offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
