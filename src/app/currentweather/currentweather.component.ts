import {Component} from "@angular/core";
import {ICurrentWeather} from "../interfaces/currentweather.interface";
import {HttpClient,HttpParams} from "@angular/common/http";
import {IWeatherForecast} from "../interfaces/weatherforecast.interface";

@Component({
  selector: 'app-currentweather',
  templateUrl:'./currentweather.component.html'
})

export class CurrentweatherComponent{
  data :ICurrentWeather | undefined;
  forecast: IWeatherForecast | undefined;
  cityCode ='Hanoi';
  constructor(private http: HttpClient) {//autorun after components been made
  }

  ngOnInit(){  //run after printing html
    this.changeCity();    //get API
  }

  changeCity(){
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    let params = new HttpParams();
    params = params.append('q',this.cityCode);
    params = params.append('appid','09a71427c59d38d6a34f89b47d75975c');
    params = params.append('units','metric');
    this.http.get<ICurrentWeather>(url,{params: params})
      .subscribe(value => {
        this.data = value;
        console.log(value);
      });
    const url_forecast = 'https://api.openweathermap.org/data/2.5/forecast';
    this.http.get<IWeatherForecast>(url_forecast,{params:params})
      .subscribe(value=>{
        this.forecast = value;
      })
  }
}
