import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  constructor(private countriesServices: CountriesService) {}

  public countries: Country[] = [];

  searchByCapital(term: string): void {
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
