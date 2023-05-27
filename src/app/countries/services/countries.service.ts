import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/cuntry.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchById(term: string): Observable<Country | null> {
    let url = `${this.apiUrl}/alpha/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    let url = `${this.apiUrl}/capital/${term}`;

    return this.getCountriesRequest(url);
  }

  searchCountry(term: string): Observable<Country[]> {
    let url = `${this.apiUrl}/name/${term}`;

    return this.getCountriesRequest(url);
  }

  searchRegion(term: string): Observable<Country[]> {
    let url = `${this.apiUrl}/region/${term}`;

    return this.getCountriesRequest(url);
  }
}
