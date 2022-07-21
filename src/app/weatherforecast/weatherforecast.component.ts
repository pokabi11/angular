import {Component, Input} from "@angular/core";
import {IWeatherForecast} from "../interfaces/weatherforecast.interface";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-weatherforcast',
  templateUrl:'./weatherforecast.component.html'
})

export class WeatherforecastComponent{
  @Input()
  data!:IWeatherForecast | undefined;
}
