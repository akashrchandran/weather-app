import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { IpaddressService } from './services/ipaddress.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService, private ipaddressService: IpaddressService) {
  }
  cityName: string = '';
  weatherData?: WeatherData;
  isDay = true;
  async ngOnInit() {
    this.ipaddressService.getIpaddress().pipe(
      concatMap((response) => {
        this.cityName = response.city;
        return this.weatherService.getWeatherData(this.cityName);
      })
    ).subscribe({
      next: (response) => {
        this.weatherData = response;
        this.cityName = '';
      }
    });
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          this.isDay = response.current.is_day === 1 ? true: false;
        }
      });

  }
  private async getIPAddress() {
    this.ipaddressService.getIpaddress()
      .subscribe({
        next: (response) => {
          this.cityName = response.city;
        }
      });
  }
}
