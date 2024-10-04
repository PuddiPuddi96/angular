import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private readonly httpClient = inject(HttpClient);
  private readonly userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetchingthe available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetchingthe your favorite places. Please try again later.'
    ).pipe(tap({
      next: (userPlaces) => this.userPlaces.set(userPlaces),
    }));
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    
    if(!prevPlaces.some((p) => p.id === place.id)){
      this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient.put(
      'http://localhost:3000/user-places',
      { placeId: place.id }
    ).pipe(
      catchError(error => {
        this.userPlaces.set(prevPlaces);
        return throwError(() => new Error('Failed to store selected place.'))
      })
    );
  }

  removeUserPlace(place: Place) { 
    //do something
  }

  private fetchPlaces(url: string, errorMessage: string): Observable<Place[]> {
    return this.httpClient
      .get<{ places: Place[] }>(url)
      .pipe(
        map((resData) => resData.places),
        catchError((error) => {
          console.log(error)
          return throwError(
            () =>
              new Error(
                errorMessage
              )
          );
        })
      )
  }

}
