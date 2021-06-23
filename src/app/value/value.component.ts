import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  configUrl = 'http://swapi.dev/api/planets/1/'
  values: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValue()
  }

  getValue() {
    return this.http.get<any>(this.configUrl).subscribe(response => {
      console.log(response);
      this.values = response
    }, error => {
      console.log(error);
    })
  }

}
