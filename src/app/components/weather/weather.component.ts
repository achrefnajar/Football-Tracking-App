import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm:FormGroup;
  result:any={};
  iconurl:string;
  constructor(private formBuilder:FormBuilder,private weatheService:WeatherService) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group ({
      country: ['', [Validators.required]],
     
  })
  }
  search(){
    console.log("here weather",this.weatherForm.value.country)
    this.weatheService.searchWeather(this.weatherForm.value).subscribe((response)=> {
        console.log("here response weather" ,response.weathersResponse);
        this.result = response.weathersResponse;

        this.iconurl = "http://openweathermap.org/img/w/" + this.result.icone + ".png";
    })
    
  }
}
